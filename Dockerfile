# syntax=docker/dockerfile:1
# Coolify or an Ubuntu VPS: multi-stage build ending in a slim standalone runner.
# Next.js `output: "standalone"` + `node server.js`
# Same Alpine pattern as the Emdad deploy — no `apk add`, so the build
# never talks to dl-cdn.alpinelinux.org.

FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm" PATH="/pnpm:$PATH" NEXT_TELEMETRY_DISABLED=1
RUN corepack enable

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
ENV NODE_OPTIONS=--max-old-space-size=2048
RUN pnpm build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
ENV PORT=3000 HOSTNAME=0.0.0.0
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3000/ || exit 1
CMD ["node", "server.js"]

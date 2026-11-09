# Coolify settings

Use the **Dockerfile** build pack. The image is a Next.js standalone server on port **3000**.

## New resource

1. **New Resource → Application** (Git).
2. Pick this repository and the branch you deploy.
3. **Build Pack:** `Dockerfile` (not Nixpacks, not Static).
4. **Base Directory:** `/`
5. **Dockerfile Location:** `/Dockerfile`
6. **Port:** `3000`
7. **Is it a static site?** No.

## Network / domain

- Connect the Coolify proxy.
- Add your domain.
- HTTPS / Let’s Encrypt: on.
- Do **not** map host port 3000 yourself if the proxy is handling TLS.

## Environment variables

| Key | Value |
| --- | --- |
| `NODE_ENV` | `production` |
| `HOSTNAME` | `0.0.0.0` |
| `PORT` | `3000` |
| `NEXT_TELEMETRY_DISABLED` | `1` |

No database. No extra volumes.

## Health check (optional)

- Path: `/`
- Port: `3000`
- The image already defines a Docker `HEALTHCHECK`.

## Local check

```bash
docker compose up --build
```

Then open `http://localhost:3000`.

The image is **Debian slim** (`node:22-bookworm-slim`), not Alpine. Alpine `apk` talks to `dl-cdn.alpinelinux.org`, which often fails DNS inside Coolify build containers even when `github.com` works on the host.

## If the build runs out of memory

On a small VPS, set a build-time variable:

```
NODE_OPTIONS=--max-old-space-size=2048
```

The Dockerfile already sets that during `pnpm run build`.

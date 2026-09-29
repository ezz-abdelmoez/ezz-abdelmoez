import type { SVGProps } from "react";

export type ChessPieceName = "king" | "queen" | "rook" | "bishop" | "knight" | "pawn";

function Plinth() {
  return (
    <>
      <path d="M16 49.2h32v3.6H16z" />
      <path d="M11.5 53.2h41v3.6c0 1.4-1.2 2.7-2.7 2.7H14.2c-1.5 0-2.7-1.3-2.7-2.7v-3.6z" />
    </>
  );
}

function King() {
  return (
    <>
      <path d="M29 1.6h6v5.2h6.8v5.4H35v5.4h-6V12.2h-6.8V6.8H29V1.6z" />
      <path d="M32 16.8c-6.4 0-11.4 4.2-11.4 9.6 0 3.3 1.8 6.2 4.7 7.9C18.4 36.6 14 42.4 14 49.6V52h36v-2.4c0-7.2-4.4-13-11.3-15.3 2.9-1.7 4.7-4.6 4.7-7.9 0-5.4-5-9.6-11.4-9.6z" />
      <Plinth />
    </>
  );
}

function Queen() {
  return (
    <>
      <circle cx="10.5" cy="17.5" r="4.8" />
      <circle cx="21.5" cy="10.5" r="4.8" />
      <circle cx="32" cy="7.2" r="5.1" />
      <circle cx="42.5" cy="10.5" r="4.8" />
      <circle cx="53.5" cy="17.5" r="4.8" />
      <path d="M10.5 17.5 18 32h28l7.5-14.5L42.5 26 32 13.5 21.5 26z" />
      <path d="M19.5 32h25c5.2 2.8 8.3 8 8.3 14.2V49H11.2v-2.8C11.2 40 14.3 34.8 19.5 32z" />
      <Plinth />
    </>
  );
}

function Rook() {
  return (
    <>
      <path d="M12 4.8h10.2v9.2h6.4V4.8h6.8v9.2h6.4V4.8H52v20.4H12V4.8z" />
      <path d="M18 25.2h28v21.2H18z" />
      <path d="M14 46.4h36v3.2H14z" />
      <Plinth />
    </>
  );
}

function Bishop() {
  return (
    <>
      <circle cx="32" cy="6.2" r="3.6" />
      <path
        fillRule="evenodd"
        d="M32 9.2c9.2 6.6 13.6 14.6 13.6 23.2 0 7.6-6.1 13.2-13.6 13.2S18.4 40 18.4 32.4C18.4 23.8 22.8 15.8 32 9.2zm0 12.4c1.3 0 2.4.7 2.9 1.8l2.6 6.6-5.5 9.2-5.5-9.2 2.6-6.6c.5-1.1 1.6-1.8 2.9-1.8z"
      />
      <path d="M21.5 46.2h21c3.2 1.6 5.1 4.2 5.1 7.2v1.2H16.4V53.4c0-3 1.9-5.6 5.1-7.2z" />
      <Plinth />
    </>
  );
}

function Knight() {
  return (
    <>
      <path d="M33 3.2 41.5 13c6.2 2 10.8 8.4 9 16 4.4 2.6 3.8 10.2-1.6 13.2L47 49H18.5l1.6-6.2C13.4 39 8.4 32.2 11.2 24.2 5.6 21.2 6.4 13.2 13.2 12.2 16 7.2 24.2 4 33 3.2z" />
      <Plinth />
    </>
  );
}

function Pawn() {
  return (
    <>
      <path d="M32 6.8c6.4 0 11.6 5.2 11.6 11.6 0 4.4-2.5 8.2-6.2 10.2 7.4 2.2 12.6 8.8 12.6 16.8V48H14v-2.6c0-8 5.2-14.6 12.6-16.8-3.7-2-6.2-5.8-6.2-10.2C20.4 12 25.6 6.8 32 6.8z" />
      <Plinth />
    </>
  );
}

export function ChessPiece({
  piece,
  className,
  ...props
}: {
  piece: ChessPieceName;
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, "viewBox" | "fill" | "aria-hidden">) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
      overflow="visible"
      {...props}
    >
      {piece === "king" && <King />}
      {piece === "queen" && <Queen />}
      {piece === "rook" && <Rook />}
      {piece === "bishop" && <Bishop />}
      {piece === "knight" && <Knight />}
      {piece === "pawn" && <Pawn />}
    </svg>
  );
}

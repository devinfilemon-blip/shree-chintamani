import type { SVGProps } from "react";
import type React from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = { stroke: "#f26522", strokeWidth: 2, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function IconTruck(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...p}>
      <rect x="4" y="14" width="28" height="18" rx="2" {...stroke} />
      <path d="M32 20h8l6 8v4H32V20z" {...stroke} />
      <circle cx="14" cy="32" r="4" {...stroke} />
      <circle cx="36" cy="32" r="4" {...stroke} />
    </svg>
  );
}

export function IconGlobe(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...p}>
      <circle cx="24" cy="24" r="18" {...stroke} />
      <path d="M4 24h40M24 6c6 8 6 26 0 36M24 6c-6 8-6 26 0 36" {...stroke} />
    </svg>
  );
}

export function IconImport(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...p}>
      <path d="M24 8v24M16 24l8 8 8-8" {...stroke} />
      <path d="M8 36h32" {...stroke} />
    </svg>
  );
}

export function IconDocument(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...p}>
      <path d="M12 6h16l8 8v28a2 2 0 01-2 2H12a2 2 0 01-2-2V8a2 2 0 012-2z" {...stroke} />
      <path d="M28 6v8h8M16 22h16M16 30h12" {...stroke} />
    </svg>
  );
}

export function IconWarehouse(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...p}>
      <path d="M6 20L24 8l18 12v20H6V20z" {...stroke} />
      <path d="M18 32h12v12H18z" {...stroke} />
    </svg>
  );
}

export function IconPlane(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...p}>
      <path d="M4 28l18-6 6-14 4 4-6 14 18 6-4 8-8-4-6 10-4-2 4-8z" {...stroke} />
    </svg>
  );
}

export function IconCompliance(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...p}>
      <circle cx="24" cy="24" r="16" {...stroke} />
      <path d="M16 24l6 6 12-12" {...stroke} />
    </svg>
  );
}

export function IconLeaves(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...p}>
      <path d="M24 8c-8 12-8 20 0 32M24 8c8 12 8 20 0 32M12 20c8 4 16 4 24 0M12 28c8 4 16 4 24 0" {...stroke} />
    </svg>
  );
}

export function IconEnvironment(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...p}>
      <path d="M24 38V22M24 22c-8-4-12-12-8-18 4 2 8 6 8 10M24 22c8-4 12-12 8-18-4 2-8 6-8 10" {...stroke} />
      <path d="M8 38h32" {...stroke} />
    </svg>
  );
}

export function IconSocial(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...p}>
      <circle cx="18" cy="16" r="6" {...stroke} />
      <circle cx="32" cy="20" r="5" {...stroke} />
      <path d="M6 38c0-8 6-12 12-12s12 4 12 12" {...stroke} />
    </svg>
  );
}

export function IconGovernance(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...p}>
      <path d="M24 8v6M12 14h24M16 14v6l-4 20h24l-4-20v-6" {...stroke} />
      <path d="M20 28h8" {...stroke} />
    </svg>
  );
}

export function IconEthanol(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...p}>
      <path d="M20 8h8v6h-8V8z" {...stroke} />
      <path d="M18 14h12v4c0 6-2 10-6 14v8H18v-8c-4-4-6-8-6-14v-4z" {...stroke} />
      <path d="M14 32h20" {...stroke} />
    </svg>
  );
}

export function IconMolasses(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...p}>
      <path d="M10 36c0-8 6-14 14-14s14 6 14 14" {...stroke} />
      <path d="M24 10v12M20 18h8" {...stroke} />
      <ellipse cx="24" cy="22" rx="10" ry="4" {...stroke} />
    </svg>
  );
}

export function IconEna(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...p}>
      <path d="M18 8h12v6H18V8z" {...stroke} />
      <path d="M16 14h16l-2 28H18L16 14z" {...stroke} />
      <path d="M20 22h8M20 28h8" {...stroke} />
    </svg>
  );
}

export function IconGinger(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...p}>
      <path d="M14 32c4-10 8-16 14-18 2 6 2 12-2 18M28 14c6 2 10 8 10 16" {...stroke} />
      <path d="M20 20c2 4 2 8 0 12" {...stroke} />
      <ellipse cx="24" cy="36" rx="14" ry="4" {...stroke} />
    </svg>
  );
}

export function IconGarlic(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...p}>
      <path d="M24 8c-4 6-6 12-6 20v8h12v-8c0-8-2-14-6-20z" {...stroke} />
      <path d="M18 36h12M20 12l4-4 4 4M22 16h4" {...stroke} />
    </svg>
  );
}

export const productIcons: Record<string, (p: IconProps) => React.ReactElement> = {
  truck: IconTruck,
  globe: IconGlobe,
  import: IconImport,
  document: IconDocument,
  warehouse: IconWarehouse,
  plane: IconPlane,
  compliance: IconCompliance,
  ethanol: IconEthanol,
  molasses: IconMolasses,
  ena: IconEna,
  ginger: IconGinger,
  garlic: IconGarlic,
};

export const pillarIcons: Record<string, (p: IconProps) => React.ReactElement> = {
  environment: IconEnvironment,
  social: IconSocial,
  governance: IconGovernance,
};

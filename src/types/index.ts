import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TInput = {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
  colors?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
};

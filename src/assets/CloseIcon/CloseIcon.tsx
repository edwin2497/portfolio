import { SVGProps } from "react";
import { ICloseIconProps } from "assets";

const CloseIcon = ({
  width,
  height,
  fill,
  ...props
}: SVGProps<SVGSVGElement> & ICloseIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path
      fill={fill}
      d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
    />
  </svg>
);
export { CloseIcon };

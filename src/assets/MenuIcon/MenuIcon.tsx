import { SVGProps } from "react";
import { IMenuIconProps } from "assets";

const MenuIcon = ({
  width,
  height,
  fill,
  ...props
}: SVGProps<SVGSVGElement> & IMenuIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path
      fill={fill}
      d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
    />
  </svg>
);
export { MenuIcon };

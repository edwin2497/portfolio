import { SVGProps } from "react";
const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={35}
    viewBox="0 -960 960 960" 
    {...props}
  >
    <path
      fill="#66FCF1"
      d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
    />
  </svg>
);
export { MenuIcon };

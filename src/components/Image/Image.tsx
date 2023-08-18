import { ReactElement } from "react";
import { LogoProps } from "./Image.model";

export const Image = ({ src, alt, width, height }: LogoProps): ReactElement => {
  return (
    <picture>
      <img src={src} alt={alt} width={width} height={height} />
    </picture>
  );
};

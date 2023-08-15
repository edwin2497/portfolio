import { Link, ILinksProps } from "components";

export const Links = ({ routes, style }: ILinksProps) => {
  return routes.map((route) => (
    <Link key={route.id} to={route.to} style={style} name={route.name} />
  ));
};

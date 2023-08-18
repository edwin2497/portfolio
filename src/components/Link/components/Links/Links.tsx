import { Link, ILinksProps } from "components";

export const Links = ({ routes, onClick }: ILinksProps) => {
  return (
    <>
      {routes.map((route) => (
        <Link
          key={route.id}
          to={route.to}
          name={route.name}
          onClick={onClick}
        />
      ))}
    </>
  );
};

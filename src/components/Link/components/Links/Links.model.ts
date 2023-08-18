export interface ILinksProps {
  routes: { id: string; to: string; name: string }[];
  onClick?: () => void;
}

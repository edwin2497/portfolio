import { LinkProps as ReactRouterDomLinkProps } from "react-router-dom";

export interface ILinkProps extends ReactRouterDomLinkProps {
    name: string
}

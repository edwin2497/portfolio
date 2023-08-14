import { LinkProps as ReactRouterDomLinkProps } from "react-router-dom";

export interface LinkProps extends ReactRouterDomLinkProps {
    name: string
}

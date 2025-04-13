import { default as NextLink } from "next/link";
import { Link, type LinkProps } from "sanity-plugin-link-field/component";

export function SanityLink(props: LinkProps) {
  return <Link as={NextLink} {...props} />;
}

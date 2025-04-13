import type { SanityButtonProps } from "@/types";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import type { ComponentProps } from "react";
import { SanityLink } from "./sanity-link";

type SanityButtonsProps = {
  buttons: SanityButtonProps[] | null;
  className?: string;
  buttonClassName?: string;
  size?: "sm" | "lg" | "default" | "icon" | null | undefined;
};

function SanityButton({
  text,
  link,
  variant = "default",
  className,
  ...props
}: SanityButtonProps & ComponentProps<typeof Button>) {
  if (!link) {
    console.log("Link Broken", { text, link, variant });
    return <Button>Link Broken</Button>;
  }

  return (
    <Button
      variant={variant}
      {...props}
      asChild
      className={cn("rounded-[10px]", className)}
    >
      <SanityLink link={link}>{text}</SanityLink>
    </Button>
  );
}

export function SanityButtons({
  buttons,
  className,
  buttonClassName,
  size = "default",
}: SanityButtonsProps) {
  if (!buttons?.length) return null;

  return (
    <div className={cn("flex flex-col sm:flex-row gap-4", className)}>
      {buttons.map((button) => (
        <SanityButton
          key={`button-${button._key}`}
          size={size}
          {...button}
          className={buttonClassName}
        />
      ))}
    </div>
  );
}

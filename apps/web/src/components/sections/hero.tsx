import { Badge } from "@workspace/ui/components/badge";
import Image from "next/image";

import { urlFor } from "@/lib/sanity/client";
import type { PagebuilderType } from "@/types";

import { RichText } from "../richtext";
import { SanityButtons } from "../sanity-buttons";

type HeroBlockProps = PagebuilderType<"hero">;

export function HeroBlock({
  title,
  buttons,
  badge,
  image,
  richText,
}: HeroBlockProps) {
  const imageUrl = image?.asset?._ref
    ? urlFor({ ...image, _id: image.asset._ref }).url()
    : null;

  return (
    <section id="hero" className="relative h-[90vh]">
      {imageUrl && (
        <div className="relative h-full w-full">
          <Image
            src={imageUrl}
            alt={image?.alt || "Hero Image"}
            layout="fill"
            objectFit="cover"
            quality={80}
            priority
          />
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center flex-col gap-8">
            {badge && <Badge variant="secondary">{badge}</Badge>}
            <div className="grid gap-4">
              <h1 className="text-4xl lg:text-6xl font-semibold text-white">
                {title}
              </h1>
              {richText && (
                <RichText
                  richText={richText}
                  className="text-base md:text-lg font-normal text-white"
                />
              )}
            </div>
            <SanityButtons
              buttons={buttons}
              buttonClassName="w-full sm:w-auto"
              className="w-full sm:w-fit grid gap-2 sm:grid-flow-col lg:justify-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

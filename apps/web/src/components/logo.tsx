import Image from "next/image";
import Link from "next/link";

import type { Maybe, SanityImageProps } from "@/types";

import { SanityImage } from "./sanity-image";

const LOGO_URL =
  "https://cdn.sanity.io/images/s6kuy1ts/production/68c438f68264717e93c7ba1e85f1d0c4b58b33c2-1200x621.svg";

interface LogoProps {
  srcLight?: Maybe<string>;
  srcDark?: Maybe<string>;
  image?: Maybe<SanityImageProps>;
  alt?: Maybe<string>;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function Logo({
  srcLight,
  srcDark,
  alt = "logo",
  image,
  width = 170,
  height = 40,
  priority = true,
}: LogoProps) {
  return (
    <Link href="/" className="">
      <div className={`overflow-hidden`}>
        {image ? (
          <SanityImage
            asset={image}
            alt={alt ?? "logo"}
            width={width}
            className="w-full h-full object-contain"
            height={height}
            priority={priority}
            loading="eager"
            decoding="sync"
            quality={100}
          />
        ) : (
          <Image
            src={srcLight ?? LOGO_URL}
            alt={alt ?? "logo"}
            width={width}
            className="w-full h-full object-contain dark:hidden"
            height={height}
            loading="eager"
            priority={priority}
            decoding="sync"
          />
        )}
        <Image
          src={srcDark ?? LOGO_URL}
          alt={alt ?? "logo"}
          width={width}
          className="w-full h-full object-contain hidden dark:block"
          height={height}
          loading="eager"
          priority={priority}
          decoding="sync"
        />
      </div>
    </Link>
  );
}

import Image from "next/image";

interface SocialIconProps {
  className?: string;
}

export function InstagramIcon({ className = "w-4 h-4" }: SocialIconProps) {
  return (
    <Image
      src="/images/instagram.png"
      alt="Tagine Instagram"
      width={24}
      height={24}
      className={`object-contain inline-block shrink-0 ${className}`}
    />
  );
}

export function FacebookIcon({ className = "w-4 h-4" }: SocialIconProps) {
  return (
    <Image
      src="/images/facebook.png"
      alt="Tagine Facebook"
      width={24}
      height={24}
      className={`object-contain inline-block shrink-0 ${className}`}
    />
  );
}

export function YelpIcon({ className = "w-4 h-4" }: SocialIconProps) {
  return (
    <Image
      src="/images/yelp.png"
      alt="Tagine Yelp"
      width={24}
      height={24}
      className={`object-contain inline-block shrink-0 ${className}`}
    />
  );
}

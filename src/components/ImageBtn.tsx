import Link from "next/link";
import Image from "next/image";

interface ImageBtnProps {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  newTab?: boolean; // optional, but default is true
}

export default function ImageBtn({
  href,
  src,
  alt,
  width,
  height,
  className,
  newTab = true,
}: ImageBtnProps) {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={`inline-block transition-transform duration-300 hover:scale-105`}
    >
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className={className}
        style={{ objectFit: 'contain' }}
      />
    </Link>
  );
}

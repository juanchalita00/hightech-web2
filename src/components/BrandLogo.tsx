import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;
  priority?: boolean;
  className?: string;
  variant?: "default" | "white";
};

export function BrandLogo({ href = "/", priority = false, className = "", variant = "default" }: Props) {
  const src = variant === "white" ? "/brand/hightech-logo-white.png" : "/brand/hightech-logo-tight.png";

  return (
    <Link href={href} className={`brand-logo ${className}`.trim()} aria-label="HIGHTECH Polarizados, inicio">
      <Image
        src={src}
        alt="HIGHTECH Polarizados"
        width={455}
        height={195}
        priority={priority}
        sizes="(max-width: 640px) 150px, 178px"
      />
    </Link>
  );
}

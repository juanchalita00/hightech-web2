import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;
  priority?: boolean;
  className?: string;
};

export function BrandLogo({ href = "/", priority = false, className = "" }: Props) {
  return (
    <Link href={href} className={`brand-logo ${className}`.trim()} aria-label="HIGHTECH Polarizados, inicio">
      <Image
        src="/brand/hightech-logo-tight.png"
        alt="HIGHTECH Polarizados"
        width={455}
        height={195}
        priority={priority}
        sizes="(max-width: 640px) 150px, 178px"
      />
    </Link>
  );
}

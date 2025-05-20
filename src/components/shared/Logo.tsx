import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
  children?: string;
}

export default function Logo({
  href = "/",
  className = "",
  children = "TNS",
}: LogoProps) {
  return (
    <Link
      className={`font-anta text-[30px] text-white bg-[var(--color-main)] py-2 px-5 rounded-[12px] font-bold ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}

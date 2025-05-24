import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
}

export default function NavItem({ href, label }: NavItemProps) {
  return (
    <Link
      href={href}
      className="text-base font-medium text-white hover:text-blue-300 transition-colors duration-200"
    >
      {label}
    </Link>
  );
}

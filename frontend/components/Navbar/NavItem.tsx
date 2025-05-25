import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <Link
      href={href}
      className="text-base font-medium text-gray-900 dark:text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-70 dark:hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:underline"
    >
      {label}
    </Link>
  );
};

export default NavItem;

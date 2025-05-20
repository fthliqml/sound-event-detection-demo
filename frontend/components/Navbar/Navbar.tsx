import Image from "next/image";

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <header className="relative py-4 md:py-6">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              <Image
                className="w-auto h-auto"
                width={32}
                height={32}
                src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg"
                alt=""
                priority
              />
            </a>
          </div>

          <div className="flex md:hidden">
            <button type="button" className="text-gray-900">
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          <div className="hidden md:flex md:ml-10 xl:ml-16 md:items-center md:justify-center md:space-x-8 xl:space-x-16">
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}

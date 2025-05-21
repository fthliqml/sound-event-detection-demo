import Navbar from "@/components/Navbar/Navbar";
import NavItem from "@/components/Navbar/NavItem";
import Link from "next/link";

import { FileInput, Label } from "flowbite-react";

export default function Demo() {
  return (
    <>
      <Navbar>
        <NavItem href="#" label="Solutions" />
        <NavItem href="#" label="Industries" />
        <NavItem href="#" label="About Us" />
        <button className="hidden md:ml-auto md:flex md:items-center md:space-x-8 xl:space-x-10">
          <Link
            href="/"
            className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Back to homepage
          </Link>
        </button>
      </Navbar>

      <section className="container mx-auto">
        <div className="space-y-5">
          <div>
            <Label className="mb-2 block" htmlFor="file-upload">
              Input file video
            </Label>
            <FileInput id="file-upload" className="w-xl" />
          </div>
        </div>

        <div className="flex w-full items-center justify-center mt-5">
          <Label
            htmlFor="dropzone-file"
            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                MP4 (MAX. 800x400px)
              </p>
            </div>
            <FileInput id="dropzone-file" className="hidden" />
          </Label>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import { ReactNode } from "react";
import neorhLogoSvg from "../../neorhLogo.svg";
import Link from "next/link";
import { A } from "../A";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full sm:py-16">
      <div className="mx-auto w-full lg:max-w-5xl bg-white px-8 lg:shadow-2xl lg:rounded-2xl overflow-hidden">
        <header className="flex flex-col sm:flex-row items-center pt-2 pb-4 bg-gray-200 -mx-8 px-4 sm:px-8">
          <div>
            <Link href="/">
              <h1 className="font-bold text-2xl mb-4 sm:mb-0">
                Neo Geo ROM hacks
              </h1>
            </Link>
            <p className="text-sm text-gray-700 invisible sm:visible">
              enhance your Neo games with ease
            </p>
          </div>
          <div className="flex-1 hidden sm:visible"></div>
          <div className="flex flex-row sm:flex-1 w-full items-center">
            <ul className="px-4 flex flex-col flex-wrap sm:flex-row items-start sm:items-center justify-start space-y-2 sm:space-y-0 sm:space-x-5 sm:place-content-between sm:px-16 sticky top-0">
              <li>
                <A className="text-black" href="/whats-new">
                  What&apos;s New
                </A>
              </li>
              <li>
                <A className="text-black" href="/about">
                  About
                </A>
              </li>
            </ul>
            <div className="flex-1"></div>
            <Link href="/">
              <Image
                src={neorhLogoSvg.src}
                width={neorhLogoSvg.width}
                height={neorhLogoSvg.height}
                alt="neorh logo"
                className="w-16"
              />
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-8 border-t border-gray-500 -mx-8 px-8 py-2 bg-gray-200 text-gray-500 text-center text-xs">
          created by <A href="https://mattgreer.dev">Matt Greer</A> |{" "}
          <A href="https://github.com/city41/neorh">github</A>
        </footer>
      </div>
    </div>
  );
}

export { Layout };

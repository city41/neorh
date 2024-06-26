import Image from "next/image";
import { ReactNode } from "react";
import neorhLogoSvg from "../../neorhLogo.svg";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full sm:py-16">
      <div className="mx-auto w-full lg:max-w-4xl bg-white px-8 pb-4 lg:shadow-2xl lg:rounded-2xl">
        <Image
          src={neorhLogoSvg.src}
          width={neorhLogoSvg.width}
          height={neorhLogoSvg.height}
          alt="neorh logo"
          className="w-28"
        />
        <div className="min-h-screen">{children}</div>
        <div>goodbye</div>
      </div>
    </div>
  );
}

export { Layout };

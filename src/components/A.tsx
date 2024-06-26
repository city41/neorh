import clsx from "clsx";
import Link from "next/link";

function A({ href, className, ...rest }: JSX.IntrinsicElements["a"]) {
  return (
    <Link
      className={clsx(
        className,
        "text-blue-700 hover:underline cursor-pointer"
      )}
      href={href!}
      {...rest}
      rel="noopener noreferer"
    />
  );
}

export { A };

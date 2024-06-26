import Link from "next/link";

function A({ href, ...rest }: JSX.IntrinsicElements["a"]) {
  return (
    <Link
      className="text-blue-700 hover:underline cursor-pointer"
      href={href!}
      {...rest}
      rel="noopener noreferer"
    />
  );
}

export { A };

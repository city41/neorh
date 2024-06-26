import clsx from "clsx";
import { A } from "../A";

type MetaEntryProps = {
  className?: string;
  metaKey: string;
  value: string | number;
  hyperlink?: boolean;
};

function MetaEntry({ className, metaKey, value, hyperlink }: MetaEntryProps) {
  if (hyperlink) {
    return <A href={value.toString()}>{metaKey}</A>;
  }

  return (
    <div className={clsx(className, "flex flex-row gap-x-2")}>
      <div className="text-gray-400">{metaKey}</div>
      <div>{value}</div>
    </div>
  );
}

export { MetaEntry };

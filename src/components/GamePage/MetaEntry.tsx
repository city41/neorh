import clsx from "clsx";

type MetaEntryProps = {
  className?: string;
  metaKey: string;
  value: string | number;
};

function MetaEntry({ className, metaKey, value }: MetaEntryProps) {
  return (
    <div className={clsx(className, "flex flex-row gap-x-2")}>
      <div className="text-gray-400">{metaKey}</div>
      <div>{value}</div>
    </div>
  );
}

export { MetaEntry };

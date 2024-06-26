import clsx from "clsx";

type MetaEntryProps = {
  className?: string;
  metaKey: string;
  value: string | number;
  hyperlink?: boolean;
};

function MetaEntry({ className, metaKey, value, hyperlink }: MetaEntryProps) {
  const valEl = hyperlink ? (
    <a href={value.toString()}>{value}</a>
  ) : (
    <div>{value}</div>
  );
  return (
    <div className={clsx(className, "flex flex-row gap-x-2")}>
      <div className="text-gray-400">{metaKey}</div>
      {valEl}
    </div>
  );
}

export { MetaEntry };

function A(props: JSX.IntrinsicElements["a"]) {
  return (
    <a
      className="text-blue-700 hover:underline cursor-pointer"
      {...props}
      rel="noopener noreferer"
    />
  );
}

export { A };

interface Ibtn {
  children: string;
}
export function Button({ children }: Ibtn) {
  return (
    <>
      <button className="py-2 bg-green-600 rounded-md text-white text-[0.75rem] hover:bg-green-500">
        {children}
      </button>
    </>
  );
}

interface Ibtn {
  children: string;
}
export function Button({ children }: Ibtn) {
  return (
    <>
      <button className="py-[0.840rem]  bg-green-600 rounded-md text-white text-[1rem] hover:bg-green-500">
        {children}
      </button>
    </>
  );
}

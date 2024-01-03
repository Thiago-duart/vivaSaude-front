interface IInput {
  label: string;
  name: string;
  error: any;
}
export function Input({ label, name, error }: IInput) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className=" font-normal text-sm dark:text-white">
          {label}
        </label>
        <input
          className="border border-black rounded-md outline-none px-3 py-2 font-normal text-[12px] focus:border-green-600 dark:focus:border-green-600 dark:text-white bg-slate-100 dark:bg-black dark:border-gayBoder"
          type="text"
          name={name}
          id={name}
          required
        />
        <p className=" text-[12px] text-red-700">
          {error && error?.[name]?.[0]}
        </p>
      </div>
    </>
  );
}

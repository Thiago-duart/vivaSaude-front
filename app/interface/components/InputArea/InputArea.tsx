interface IArea {
  placeholder: string;
  name: string;
  label: string;
}
export function InputArea({ name, placeholder, label }: IArea) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label className=" font-normal text-sm dark:text-white" htmlFor={name}>
          {label}
        </label>
        <textarea
          placeholder={placeholder}
          name={name}
          id={name}
          className=" h-96 border border-black rounded-md outline-none px-3 py-[0.875rem]  font-normal text-[1rem] focus:border-green-600 dark:focus:border-green-600 dark:text-white bg-slate-100 dark:bg-black dark:border-grayBoder resize-none "
        ></textarea>
      </div>
    </>
  );
}

"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface IInput {
  label: string;
  name: string;
  // error: any;
}
export function PasswordInput({ label, name }: IInput) {
  const [visible, setVisible] = useState(false);
  console.log(visible);

  return (
    <>
      <div className="flex flex-col gap-2 ">
        <label htmlFor={name} className=" font-normal text-sm dark:text-white">
          {label}
        </label>
        <div className="flex  justify-between items-center rounded-md px-2 border border-black dark:bg-black focus:border-green-600 dark:border-gayBoder">
          <input
            className="outline-none py-2  px-1 font-normal text-[12px]  dark:text-white dark:bg-black "
            type={visible ? "text" : "password"}
            name={name}
            id={name}
            required
          />
          {visible ? (
            <EyeOff
              className="text-black dark:bg-black dark:text-white "
              size={12}
              onClick={() => setVisible(false)}
            />
          ) : (
            <Eye
              className="text-black dark:bg-black dark:text-white "
              size={12}
              onClick={() => setVisible(true)}
            />
          )}
        </div>
        {/* <p>{error}</p> */}
      </div>
    </>
  );
}

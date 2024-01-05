"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface IInput {
  label: string;
  name: string;
  error: any;
}
interface Iborder {
  light: string;
  dark: string;
}
export function PasswordInput({ label, name, error }: IInput) {
  const [visible, setVisible] = useState(false);
  const [border, setBorder] = useState<Iborder>({ light: "", dark: "" });

  return (
    <>
      <div className="flex flex-col gap-2 ">
        <label htmlFor={name} className=" font-normal text-sm dark:text-white">
          {label}
        </label>
        <div
          className={`flex  justify-between items-center rounded-md px-2 border border-black  bg-slate-100 dark:bg-black dark:border-grayBoder ${border?.light} ${border?.dark}`}
        >
          <input
            className="outline-none py-2  px-1 font-normal text-[12px]   dark:text-white bg-slate-100 dark:bg-black  w-full"
            type={visible ? "text" : "password"}
            name={name}
            id={name}
            onFocus={() =>
              setBorder({
                light: "border-green-600",
                dark: "dark:border-green-600",
              })
            }
            onBlur={() =>
              setBorder({
                light: "",
                dark: "",
              })
            }
            required
          />
          {visible ? (
            <EyeOff
              className="text-black dark:bg-black dark:text-white cursor-pointer"
              size={12}
              onClick={() => setVisible(false)}
            />
          ) : (
            <Eye
              className="text-black dark:bg-black dark:text-white cursor-pointer"
              size={12}
              onClick={() => setVisible(true)}
            />
          )}
        </div>
        <p className=" text-[12px] text-red-700">
          {error && error?.[name]?.[0]}
        </p>
      </div>
    </>
  );
}

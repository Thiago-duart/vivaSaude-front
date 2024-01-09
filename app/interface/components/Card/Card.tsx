import { Edit, Flame, Hourglass, Trash } from "lucide-react";
import { AnimationPing } from "../..";
interface ICard {
  title: string;
  description: string;
  time: string;
  calorie: number;
}
export function Card({ ...props }: ICard) {
  return (
    <>
      <div className="flex flex-col justify-between w-96 h-60 gap-3 p-3 cursor-pointer border-2 border-grayParagraphyLight dark:border-grayParagraphyDark rounded-md hover:border-green-600 dark:hover:border-green-600">
        <div className="flex items-center gap-6">
          <AnimationPing />
          <h2 className="text-lg">{props.title}</h2>
        </div>
        <p className="text-grayParagraphyLight dark:text-grayParagraphyDark text-sm text-center">
          {props.description}
        </p>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <Hourglass />
            <p>{props.time}</p>
          </div>
          <div className="flex gap-1 items-center">
            <Flame />
            <p>{props.calorie}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export function HandleCard({ ...props }: ICard) {
  return (
    <>
      <div className="flex flex-col justify-between w-96 h-60 gap-3 p-3 border-2 border-grayParagraphyLight dark:border-grayParagraphyDark rounded-md hover:border-green-600 dark:hover:border-green-600">
        <div className="flex items-center gap-6">
          <AnimationPing />
          <h2 className="text-lg">{props.title}</h2>
        </div>
        <p className="text-grayParagraphyLight dark:text-grayParagraphyDark text-sm text-center">
          {props.description}
        </p>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <Hourglass />
            <p>{props.time}</p>
          </div>
          <div className="flex gap-4 items-center ">
            <Trash className="cursor-pointer text-red-600 hover:text-red-500" />
            <Edit className="cursor-pointer text-green-600 hover:text-green-500" />
          </div>
          <div className="flex gap-1 items-center">
            <Flame />
            <p>{props.calorie}</p>
          </div>
        </div>
      </div>
    </>
  );
}

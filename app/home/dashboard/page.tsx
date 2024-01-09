import { ChangeWeek, HandleCard, MyLink } from "@/app/interface";
import { PlusCircle } from "lucide-react";

export default function DashBoard() {
  return (
    <>
      <ChangeWeek name="Gerenciar" />
      <div className="mt-12">
        <div className="flex  justify-end w-full">
          <MyLink href="./dashboard/addcard">
            <PlusCircle
              size={27}
              className="hover:text-green-600 cursor-pointer"
            />
          </MyLink>
        </div>
        <div className="flex flex-wrap justify-center gap-6 p-12 w-full">
          {/* <HandleCard /> */}
        </div>
      </div>
    </>
  );
}

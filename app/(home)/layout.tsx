import { Suspense } from "react";
import { Aside } from "../interface";
import Loading from "./food/loading";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex h-screen ">
        <Aside />
        <section className="w-full 2xl:h-screen p-12">{children}</section>
      </div>
    </Suspense>
  );
}

import { Aside } from "../interface";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen ">
        <Aside />
        <section className="w-full dark:bg-grayBackground dark:text-white 2xl:h-screen p-12">
          {children}
        </section>
      </div>
    </>
  );
}

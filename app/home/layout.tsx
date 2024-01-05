import { Aside } from "../interface";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Aside />
      {children}
    </section>
  );
}

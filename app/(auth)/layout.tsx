import { DefaultLayout } from "../interface";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <DefaultLayout>{children}</DefaultLayout>
    </section>
  );
}

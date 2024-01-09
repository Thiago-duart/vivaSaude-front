import { DefaultLayout } from "../interface";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DefaultLayout>{children}</DefaultLayout>
    </div>
  );
}

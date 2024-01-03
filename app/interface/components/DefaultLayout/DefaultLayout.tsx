import { Header } from "../..";

interface ILayout {
  children: React.ReactNode;
}
export function DefaultLayout({ children }: ILayout) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}

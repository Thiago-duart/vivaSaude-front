import Link from "next/link";
interface ILink {
  href: string;
  children: React.ReactNode;
}
export function MyLink({ href, children }: ILink) {
  return (
    <>
      <Link href={href}>{children}</Link>
    </>
  );
}

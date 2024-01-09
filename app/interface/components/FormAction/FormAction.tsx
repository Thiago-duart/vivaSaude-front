interface IForm {
  actionfn: any;
  children: React.ReactNode;
}
export function FormAction({ actionfn, children }: IForm) {
  return (
    <form action={actionfn} className="flex flex-col sm:w-[530px] gap-2">
      {children}
    </form>
  );
}

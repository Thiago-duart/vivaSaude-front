export function useParse(schema: any, data: any): any {
  const parse = schema.safeParse(data);
  if (!parse.success) {
    return parse.error.flatten();
  }
  return parse;
}

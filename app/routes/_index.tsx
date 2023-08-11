import { redirect, type DataFunctionArgs } from "@remix-run/node";

export function loader(_: DataFunctionArgs) {
  return redirect("pokemon");
}

import type { DataFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Profile } from "~/components/profile/Profile";
import { commitSession, getSession } from "~/sessions";

export async function action({ request }: DataFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  const form = await request.formData();
  const name = form.get("name");
  const email = form.get("email");

  if (typeof name !== "string") throw new Error("name must be a string");
  if (typeof email !== "string") throw new Error("email must be a string");

  session.set("name", name);
  session.set("email", email);

  return redirect(".", {
    headers: { "Set-Cookie": await commitSession(session) },
  });
}

export default function ProfilePage() {
  return <Profile />;
}

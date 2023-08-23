import type { DataFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Profile } from "~/components/profile/Profile";

export async function action({ request }: DataFunctionArgs) {
  const form = await request.formData();
  const name = form.get("name");
  const email = form.get("email");

  console.log(`name: ${name}`);
  console.log(`email: ${email}`);

  return redirect(".");
}

export default function ProfilePage() {
  return <Profile />;
}

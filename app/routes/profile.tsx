import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import type {
  ProfileErrors,
  ProfileValues,
} from "~/components/profile/Profile";
import { Profile } from "~/components/profile/Profile";
import { commitSession, getSession } from "~/sessions";

export async function action({ request }: ActionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  const form = await request.formData();
  const name = form.get("name");
  const email = form.get("email");

  if (typeof name !== "string") {
    throw new Error("name must be string");
  }
  if (typeof email !== "string") {
    throw new Error("email must be string");
  }

  const errors = validateProfile({ name, email });

  if (hasErrors(errors)) {
    return json({ values: { name, email }, errors }, { status: 400 });
  }

  session.set("name", name);
  session.set("email", email);

  return redirect(".", {
    headers: { "Set-Cookie": await commitSession(session) },
  });
}

function validateProfile({ name, email }: ProfileValues) {
  const errors: ProfileErrors = {};

  if (!name || typeof name !== "string") {
    errors.name = "Name is required!";
  } else if (name.length > 25) {
    errors.name = "The name should be max. 25 characters long!";
  }

  if (!email || typeof email !== "string") {
    errors.email = "Email is required!";
  } else if (!email.match(/^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
    errors.email = "Invalid email!";
  }

  return errors;
}

function hasErrors(errors: ProfileErrors) {
  return Object.values(errors).length > 0;
}

export default function ProfilePage() {
  const actionData = useActionData<typeof action>();
  return <Profile values={actionData?.values} errors={actionData?.errors} />;
}

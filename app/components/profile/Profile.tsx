import { Form } from "@remix-run/react";

export function Profile() {
  return (
    <Form method="post">
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" placeholder="Dr. React" />
      </div>
      <div>
        <label htmlFor="email">E-Mail: </label>
        <input
          type="text"
          placeholder="react@zuhlke.com"
          id="email"
          name="email"
        />
      </div>
      <input type="submit" value="save" />
    </Form>
  );
}

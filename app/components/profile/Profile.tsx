import { Form } from "@remix-run/react";

export function Profile() {
  return (
    <Form method="post">
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Dr. React"
          // className={errors?.name?.type ? styles.inputError : ""}
        />
        {/* {errors?.name?.type && <span>{errors.name.message}</span>} */}
      </div>
      <div>
        <label htmlFor="email">E-Mail: </label>
        <input
          type="text"
          placeholder="react@zuhlke.com"
          id="email"
          name="email"
          // className={errors?.name?.type ? styles.inputError : ""}
        />
        {/* {errors?.email?.type && <span>{errors.email.message}</span>} */}
      </div>
      <input type="submit" value="save" />
    </Form>
  );
}

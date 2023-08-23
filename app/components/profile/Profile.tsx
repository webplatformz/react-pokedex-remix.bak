import { Form } from "@remix-run/react";
import styles from "./Profile.module.css";

type ProfileProps = {
  values?: ProfileValues;
  errors?: ProfileErrors;
};

export type ProfileValues = {
  name: string;
  email: string;
};

export type ProfileErrors = {
  [K in keyof ProfileValues]?: string;
};

export function Profile({ values, errors }: ProfileProps) {
  return (
    <Form method="post">
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Dr. React"
          className={errors?.name ? styles.inputError : ""}
          defaultValue={values?.name}
        />
        {errors?.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">E-Mail: </label>
        <input
          type="text"
          placeholder="react@zuhlke.com"
          id="email"
          name="email"
          className={errors?.email ? styles.inputError : ""}
          defaultValue={values?.email}
        />
        {errors?.email && <span>{errors.email}</span>}
      </div>
      <input type="submit" value="save" />
    </Form>
  );
}

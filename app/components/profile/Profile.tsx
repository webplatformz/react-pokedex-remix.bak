import { useState } from "react";
import styles from "./Profile.module.css";

export function Profile() {
  const [username, setUsername] = useState("");

  return (
    <>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <span className={styles.output}>
        {username.length > 0 && `Hello, ${username}`}
      </span>
    </>
  );
}

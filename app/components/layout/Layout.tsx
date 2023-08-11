import { Link, Outlet } from "@remix-run/react";
import { Profile } from "../profile/Profile";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <div className={styles.root}>
      <header>
        <nav>
          <Link to="/pokemon">Home</Link> | <Link to="/profile">Profile</Link>
        </nav>
        <Profile />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

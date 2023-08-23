import { Link, Outlet } from "@remix-run/react";
import styles from "./Layout.module.css";

type LayoutProps = {
  username?: string;
};

export function Layout({ username }: LayoutProps) {
  return (
    <div className={styles.root}>
      <header>
        <nav>
          <Link to="/pokemon">Home</Link> | <Link to="/profile">Profile</Link>
        </nav>
        <span>{username && `Hello, ${username}`}</span>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

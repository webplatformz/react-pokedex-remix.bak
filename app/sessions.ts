import { createCookieSessionStorage } from "@remix-run/node";

type SessionData = {
  name: string;
  email: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData>({
    cookie: {
      name: "__session",
      domain: "localhost",
      httpOnly: true,
      maxAge: 60 * 60 * 24, // cookie lives for 24 hours
      path: "/",
      sameSite: "lax",
      secrets: ["s3cret1"],
      secure: true,
    },
  });

export { getSession, commitSession, destroySession };

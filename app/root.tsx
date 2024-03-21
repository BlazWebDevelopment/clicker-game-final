import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import ImageOG from "../app/Images/Embed_img.png";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Blaz Dezman Portfolio" />
        <meta
          property="og:description"
          content="Mz portfolio, something about me and how I started"
        />
        <meta property="og:image" content={ImageOG} />
        <meta property="og:url" content="https://blazdezman.com/" />
        <meta property="og:type" content="website" />
        <Meta />
        <Links />
      </head>
      <body className="bg-black">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

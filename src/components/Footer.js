import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer items-center p-8 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <p>Copyright © 2023 - EddieHub</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link href="https://github.com/EddieHubCommunity/RepoRater">
          GitHub
        </Link>
      </nav>
    </footer>
  );
}

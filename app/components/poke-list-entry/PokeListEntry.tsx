import { Link } from "@remix-run/react";

type PokeListEntryProps = {
  name?: string;
};
export function PokeListEntry({ name = "Bulbasaur" }: PokeListEntryProps) {
  return (
    <li>
      <Link to={`./${name}`}>{name}</Link>
    </li>
  );
}

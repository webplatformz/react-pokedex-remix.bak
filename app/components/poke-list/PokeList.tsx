import { PokeListEntry } from "../poke-list-entry/PokeListEntry";
import styles from "./PokeList.module.css";

interface Props {
  pokemons: string[];
}

export function PokeList({ pokemons }: Props) {
  return (
    <div className={styles.root}>
      <ul>
        {pokemons.map((pokemon) => (
          <PokeListEntry key={pokemon} name={pokemon} />
        ))}
      </ul>
    </div>
  );
}

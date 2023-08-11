import { PokeList } from "~/components/poke-list/PokeList";
import { pokemonList } from "~/mockData/list";

export default function ListPage() {
  return <PokeList pokemons={pokemonList.results} />;
}

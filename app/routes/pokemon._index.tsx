import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetcher } from "~/api/fetcher";
import type { PokemonResultDto } from "~/api/pokeApi";
import { PokeList } from "~/components/poke-list/PokeList";

export async function loader() {
  const pokemonList = await fetcher<PokemonResultDto>(
    "https://pokeapi.co/api/v2/pokemon?limit=1000",
  );

  return json(pokemonList.results.map((p) => p.name));
}

export default function ListPage() {
  const pokemons = useLoaderData<typeof loader>();
  return <PokeList pokemons={pokemons} />;
}

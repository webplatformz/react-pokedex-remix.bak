import type { DataFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetcher } from "~/api/fetcher";
import type { PokemonDetailDto } from "~/api/pokeApi";

export async function loader({ params }: DataFunctionArgs) {
  const pokemonDetail = await fetcher<PokemonDetailDto>(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`,
  );

  return json(pokemonDetail);
}

export default function DetailPage() {
  const pokemonDetail = useLoaderData<typeof loader>();
  return (
    <div>
      <span>{pokemonDetail.name}</span>
      <img src={pokemonDetail.sprites.front_shiny} alt={pokemonDetail.name} />
    </div>
  );
}

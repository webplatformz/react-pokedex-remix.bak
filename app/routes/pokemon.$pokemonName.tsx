import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetcher } from "~/api/fetcher";
import type { PokemonDetailDto } from "~/api/pokeApi";

export async function loader({ params }: LoaderArgs) {
  const pokemonDetail = await fetcher<PokemonDetailDto>(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`,
  );

  return json({
    name: pokemonDetail.name,
    imageUrl: pokemonDetail.sprites.front_shiny,
  });
}

export default function DetailPage() {
  const pokemonDetail = useLoaderData<typeof loader>();
  return (
    <div>
      <span>{pokemonDetail.name}</span>
      <img src={pokemonDetail.imageUrl} alt={pokemonDetail.name} />
    </div>
  );
}

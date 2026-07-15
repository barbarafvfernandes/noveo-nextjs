import Title from "@/components/Title";
import Grid from "@/components/Grid";
import { getTrendMovies } from "@/lib/api/tmdb";

export default async function Home() {
  const filmes = await getTrendMovies();

  return (
    <>

      <Title title="Filmes em destaque" level="h1" /> 
      <Grid filmes={filmes} />
    </>
  );
}


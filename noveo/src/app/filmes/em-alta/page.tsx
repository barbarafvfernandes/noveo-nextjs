import Title from "@/components/Title";
import { getNowPlaying } from "@/lib/api/tmdb";
import Grid from "@/components/Grid";

const FilmesEmAlta = async () => {
    const nowPlaying = await getNowPlaying();
     return(

    <>

        <Title title="Filmes em Alta" level="h1" /> 
        <Grid filmes={nowPlaying}></Grid>

    </>

    )


}

export default FilmesEmAlta; 
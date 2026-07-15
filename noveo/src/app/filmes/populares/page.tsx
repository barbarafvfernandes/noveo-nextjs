import Title from "@/components/Title";
import { getPopulares } from "@/lib/api/tmdb";
import Grid from "@/components/Grid";

const FilmesPopulares = async () => {
    const populares = await getPopulares();

     return(

    <>

        <Title title="Filmes Populares" level="h1" />
        <Grid filmes={populares}></Grid>

    </>    

    )


}

export default FilmesPopulares;
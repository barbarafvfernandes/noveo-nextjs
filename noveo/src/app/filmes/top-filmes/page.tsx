import Title from "@/components/Title";
import {topFilmes} from "@/lib/api/tmdb";
import Grid from "@/components/Grid";

const TopFilmes = async() => {
    const top = await topFilmes();

    
     return(

    <>    

        <Title title="Top Filmes" level="h1" />
        <Grid filmes={top}></Grid>

    </>    

    )


}

export default TopFilmes;
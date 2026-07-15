import { notFound } from "next/dist/client/components/navigation";
import Link from "next/link";
import styles from "./DetalheFilme.module.css";
import { getMovieDetails } from "@/lib/api/tmdb";
import Title from "@/components/Title"; 

type Props = {
    params: Promise<{
        id: number
    }>
}

export const generateMetadata = async ({ params }: Props) => {
    const { id } = await params;
    const details = await getMovieDetails(id);

    if (!details) return;

    return {
        title: `${details.title} | Noveo`,
        description: details.overview,
        openGraph: {
            title: `${details.title} | Noveo`,
            description: details.overview,
            images: [
                {
                    url: `https://image.tmdb.org/t/p/w500${details.poster_path}`,
                }
            ]
        }
    }
}

const DetalheFilme = async ({ params }: Props) => {
    const { id } = await params;
    const details = await getMovieDetails(id);

    if (!details) return notFound();

    const { title, poster_path, overview } = details;

    return (
        <article className={styles.detalhes} aria-labelledby="movie-title">
            <div className={styles.detalhes__container}>
                <Link
                    className={styles.detalhes__voltar}
                    href="/"
                    aria-label="Voltar para a lista de filmes"
                >
                    Voltar
                </Link>

                <div className={styles.detalhes__content}>
                    <figure className={styles.detalhes__figure}>
                        <img
                            className={styles.detalhes__image}
                            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                            alt={`Pôster oficial do filme ${title}`}
                        />
                    </figure>

                    <div className={styles.detalhes__info}>
                        <Title title={title} level="h1" id="movie-title" />

                        <section aria-labelledby="sinopse-title" className={styles.detalhes__sinopse_container}>
                            <h2 id="sinopse-title" className={styles.detalhes__sinopse_titulo}>Sinopse</h2>
                            <p>{overview}</p>
                        </section>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default DetalheFilme;

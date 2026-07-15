import { Filme } from "@/types/types";
import styles from "./Card.module.css";
import Link from "next/link";

type Props = {
    filme: Filme
}

const Card = ({ filme }: Props) => {
    const { id, title, poster_path, overview, vote_average } = filme;
    const resume = overview.length > 100 ? overview.substring(0, 150) + "..." : overview;
    
    return (
        <article className={styles.card} aria-labelledby={`film-title-${id}`}>
            <figure className={styles.card__figure}>
                <img 
                    className={styles.card__poster} 
                    src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "https://placehold.co/300x400?text=Sem%20imagem"} 
                    alt="" 
                    width={300} 
                    height={360} 
                />
            </figure>
            
            <div className={styles.card__info}>
                <h3 className={styles.card__title} id={`film-title-${id}`}>
                    {title}
                </h3>
                
                <p className={styles.card__description}>{resume}</p>
                
                <p className={styles.card__rating} aria-label={`Nota: ${vote_average.toFixed(1)} de 10`}>
                    Nota: {vote_average.toFixed(1)}
                </p>
                
                <Link 
                    className={styles.card__link} 
                    href={`/filmes/${id}`}
                    aria-label={`Ver detalhes do filme ${title}`}
                >
                    Ver detalhes
                </Link>
            </div>
        </article>
    )
}

export default Card;

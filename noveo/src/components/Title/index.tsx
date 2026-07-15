import styles from './Title.module.css'

type Props = {
    title: string;
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    id?: string;
}

const Title = ({ title, level = 'h2', id } : Props) => {
    const Tag = level;

    return (
        <Tag className={styles.title} id = {id}>
            {title}
        </Tag>
    )
}

export default Title;

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <p className={styles.footer__text}>
        &copy; {new Date().getFullYear()} Noveo Filmes - Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;

import styles from "./nav.module.css";


const Navigation = (props) => {
    console.log(props);
    return (
        <header className={styles.nav}>
            <div className={styles.logo}>My Logo</div>
            <nav>
                <a href="#">Home</a>
                <a href="/projects">Projects</a>
                <a href="#">Updates</a>
                <a href="#">About</a>
                <a className={styles.cta} href="#">Get In Touch</a>
            </nav>
        </header>
    );
}

export default Navigation;
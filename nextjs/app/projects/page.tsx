import styles from "./page.module.css";
import Image from "next/image";
import CustomizedInstagramIcon from "@/icons/icons/customized-instagram.svg";
import CustomizedFacebookIcon from "@/icons/icons/customized-facebook-logo.svg";
import CustomizedLinkedInIcon from "@/icons/icons/customized-linkedin-logo.svg";
import Navigation from "@/components/header/Navigation.tsx";
import Footer from "@/components/footer/Footer.tsx";
import { projects } from "@/data/projects";


export default function Projects() {
  return (
    <>
      <header className={styles.nav}>
        <div className={styles.logo}>My Logo</div>
        <nav className={styles.navLinks}>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/updates">Updates</a>
          <a href="/about">About</a>
          <a className="cta" href="/contact">Get In Touch</a>
        </nav>
      </header>

      <section className={styles.projectsHero}>
        <h1>My Projects</h1>
        <p>Over the past year and a half, I've created a range of digital artwork and design projects that reflect my
          dedication, growth, and evolving creative style. Each piece represents patience, refinement, and a strong
          attention to detail, even as I push past my own perfectionism. My digital artwork is colorful, abstract, and
          expressive often incorporating silhouettes and organic shapes that leave room for interpretation. My web
          design aesthetic is clean, simple, and modern, with subtle animations and thoughtful pops of color. I'm
          inspired by functional, user-centered UX design that feels both professional and visually engaging.
        </p>
      </section>

      <div className={styles.projectsTopBar}>
        <button data-filter="all" className="active">All Projects</button>
      </div>

      <div className={styles.categoryRow}>
        <button data-filter="personal">Personal Projects</button>
        <button data-filter="business">Business Projects</button>
      </div>

      <div className={styles.statusRow}>
        <button data-filter="past">Past</button>
        <button data-filter="current">Current</button>
        <button data-filter="upcoming">Upcoming</button>
      </div>

      <main className={styles.projectsWrapper}>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <article id={project.slug} key={index} className={styles.projectCard} data-category={project.category}>
              <a href={`/projects/${project.slug}`}>
                <Image
                  src={project.image.src}
                  alt={project.title}
                  className={styles.projectImage}
                  width={200}
                  height={200}
                />
              </a>

              <div className={styles.overlay}>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>

            </article>
          ))}
        </div>
      </main >
    </>
  );
}

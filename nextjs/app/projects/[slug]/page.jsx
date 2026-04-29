import styles from "./page.module.css";
import Image from "next/image";
import CustomizedInstagramIcon from "@/icons/icons/customized-instagram.svg";
import CustomizedFacebookIcon from "@/icons/icons/customized-facebook-logo.svg";
import CustomizedLinkedInIcon from "@/icons/icons/customized-linkedin-logo.svg";
import Navigation from "@/components/header/Navigation";
import Footer from "@/components/footer/Footer";
import { projects } from "@/data/projects";


export default async function Project({ params }) {
  const resolvedParams = await params;

  const slug = resolvedParams.slug;

  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return <h1>Project not found</h1>
  }

  return (
    <main className={styles.container}>
      <Navigation />

      <div className={styles.grid}>

        {/* LEFT: IMAGE */}
        <div className={styles.left}>
          <Image
            src={project.image.src}
            width={1000}
            height={1000}
            alt={project.title}
            className={styles.image}
          />
        </div>

        {/* RIGHT: TEXT */}
        <div className={styles.right}>
          <p className={styles.badge}>WEEKLY EXERCISE</p>

          <h1 className={styles.title}>{project.title}</h1>

          <p className={styles.description}>
            {project.description}
          </p>

          <a href={`/projects#${project.slug}`} className={styles.button}>
            ← Back to Projects
          </a>
        </div>

      </div>

      <Footer />
    </main>
  );
}

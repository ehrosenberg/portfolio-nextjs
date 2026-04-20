import styles from "./page.module.css";


export default function Home() {
  return (
    <>
      <header className={styles.nav}>
        <div className={styles.logo}>My Logo</div>
        <nav>
          <a href="#">Home</a>
          <a href="/projects.html">Projects</a>
          <a href="#">Updates</a>
          <a href="#">About</a>
          <a className={styles.cta} href="#">Get In Touch</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContainer + " " + styles.container}>
          <div className={styles.left}>
            <div className={styles.imageBox}>
              <img src="/images/repeating-patterns-perfume-perfection.png" alt="Portfolio Image" />
            </div>
          </div>

          <div className={styles.right}>
            <span className={styles.badge}>Portfolio 2026</span>
            <h1>My Portfolio Project for <span>year 2026</span></h1>
            <p>I've created this website to showcase all the work and projects I've done throughout these 2 years.
              My projects have a unique aspect to them, leaving room for interpretation and innovation.</p>

            <div className={styles.actions}>
              <a href="#" className={styles.btn + " " + styles.primary}>Book A Call</a>
              <a href="/projects" className={styles.btn + " " + styles.secondary}>View Work</a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.grid}>

          <div className={styles.card}>
            <div className={styles.projectQuantity}>25</div>
            <div className={styles.cardImage}>
              <img className={styles.travelPosterImage} src="images/travel-poster-in-context-final.png" alt="" />
            </div>

            <div className={styles.cardArrow}>
              <img src="/icons/arrow.svg" width="50px" height="50px" />
            </div>
          </div>
          <div className={styles.card}>
            <img src="images/travel-poster-draft-1.png" alt="" />
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardSubtitle}>Brief Description</h3>
            <p className={styles.cardText}>
              Over this past year, I've been working on a lot of projects. However I have a few that I am working
              on that are really exciting, and are big projects. Some of the projects I'm working on include
              creating my own stamp, creating another logo brand, coding portfolio websites, practicing coding
              exercises, and creating my own innovative artwork using, photoshop, adobe illustrator, and
              procreate.</p>
            <h3>See Current Projects</h3>
            <div className={styles.cardLine}>
              <img src="/icons/line.svg" width="50px" height="50px" />
            </div>
          </div>



          <div className={styles.card}>
            <h3>Design qualities</h3>
            <p> Creative <br />
              Hard-Working <br />
              Quality over speed <br />
              Brave <br />
              Confident <br />
              Courageous <br />
              Resillient <br />
              Organized <br />
              Open to Feedback <br />
              Supportive Team Member <br />
              Reliable <br />
              Artwork/Designs meet Deadlines <br />
              Shows Up <br />
              Thinks outside of the box <br />
            </p>
          </div>

          <div className={styles.card}>
            <h2>5</h2>
            <h2>Current Projects</h2>
            <div className={styles.cardArrow}>
              <img src="/icons/arrow.svg" width="50px" height="50px" />
            </div>
          </div>

          <div className={styles.card}>
            <h3>Advertise projects</h3>
            <p>Over the past few months I've been working on exciting, new, and creative projects that are different
              from what I created in the past. These projects include, creating my own potential brand logo,
              creating my own stamp, and editing photos in photoshop.</p>
            <h3>See Upcoming Projects!</h3>
            <div className={styles.cardLine}>
              <img src="/icons/line.svg" width="50px" height="50px" />
            </div>
          </div>

          {/* <!-- ONE LARGE CARD (replaces 7–12) --> */}
          <div className={styles.card + " " + styles.cardLarge}>
            Large Feature Box
            <img src="/images/illustrative-set-perfume-perfection-final.png" alt="Large Feature Box" />
          </div>

          <div className={styles.card}>
            <h3>Past Projects</h3>
            <div className={styles.pastProjectQuantity}>23</div>
            <div className={styles.cardArrow}>
              <img src="/icons/arrow.svg" width="50px" height="50px" />
            </div>
            <img className={styles.pastProjectImage} src="/images/travel-poster-pitch-final.png" alt="Past Project" />
          </div>


          <div className={styles.card}>
            <h1>Big projects</h1>
            <img className={styles.bigProjects} src="/images/travel-poster-postcards-both-version-2.png" alt="Big Project" />
            <h3>See Past Projects</h3>
            <div className={styles.cardLine}>
              <img src="/icons/line.svg" width="50px" height="50px" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutContact}>
        <div className={styles.about}>
          <h2>About</h2>
          <h2>My Values and Purpose:</h2>
          <p>
            Thank you for taking the time to view my portfolio website, on everything I've done. I want to share a
            little bit about myself as well. I am currently enrolled in a Graphic and Web Design program that ends
            with an internship, to future design jobs and encourages me to learn more about my design asethetic.
            <br /> I play the piano, I've been playing for 14+ years, and enjoy playing it. I also love hanging out
            with friends, and spending some relaxation time. I love design, and I especially love visuals/structural
            designs/coding websites. <br /> I also really enjoy creating my own artwork with adobe illustrator and
            using various artwork styles (silouhette's, abstract art, ink/print black & white, and using different
            tools to create miticulous posters.) <br /> My career goal is to work at Google, or Youtube for UX Design,
            or designing the structural components of websites, and even creating visuals. It's been a long journey,
            and it took determination, bravery, and resillience to get up to this point and to explore my love for
            web design. Up until now, I never really knew what I wanted to do, and explored many different career's.
            <br /> I finally feel like I found a industry where I can express my authentic self and my own art.
          </p>
          <div className={styles.cardArrow}>
            <img src="/icons/arrow.svg" width="50px" height="50px" />
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.contactCube}>
            <h3>Contact Me!</h3>

            <form action="#">
              <div className={styles.nameWrapper}>
                <input type="text" placeholder="First Name:" className={styles.contactInput} />
                <input type="text" placeholder="Last Name:" className={styles.contactInput} />
              </div>
              <div className={styles.phoneEmailWrapper}>
                <input type="email" placeholder="Email:" className={styles.contactInput} />
                <input type="text" placeholder="Phone Number:" className={styles.contactInput} />
              </div>
              <textarea name="message" placeholder="Your Message:" className={styles.contactInput}></textarea>
            </form>
          </div>

          <div className={styles.contactCube}>
            <h3>Social</h3>
            <img src="/icons/customized-facebook-logo.svg" width="50px" height="50px" />
            <img src="/icons/customized-linkedin-logo.svg" width="50px" height="50px" />
            <img src="/icons/customized-instagram.svg" width="50px" height="50px" />

          </div>
        </div>
      </section>
    </>
  );
}

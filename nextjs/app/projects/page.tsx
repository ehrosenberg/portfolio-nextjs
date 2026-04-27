import styles from "./page.module.css";
import Image from "next/image";
// import ClassicalMusicLogo from "@/assets/images/classical-music-logo.jpg";
// import WeeklyExerciseAnimaLSnowLeopard from "@/assets/images/weekly-exercise-animal-snow-leopard.png";
// import WeeklyExerciseSeaShell from "@/assets/images/weekly-exercise-shell-sea-shell.png";
// import WeeklyExerciseFruitOrange from "@/assets/images/weekly-exercise-fruit-orange.png";
// import WeeklyExerciseJellyfish from "@/assets/images/weekly-exercise-jellyfish.png";
// import WeeklyExerciseSalonChair from "@/assets/images/weekly-exercise-salon-chair.png";
// import WeeklyExercisePlantHydrangea from "@/assets/images/weekly-exercise-plant-hydrangea-flower.png";
// import WeeklyExerciseFlameBlueFire from "@/assets/images/weekly-exercise-flame-blue-fire.png";
// import WeeklyExerciseCarLamborghini from "@/assets/images/weekly-exercise-car-lamborghini.png";
// import WeeklyExerciseDessertEclair from "@/assets/images/weekly-exercise-dessert-eclair.png";
// import WeeklyExerciseExtraCreditHoliday from "@/assets/images/weekly-exercise-extra-credit-holiday.png";
// import RepeatingPatternsPerfumePerfection from "@/assets/images/repeating-patterns-perfume-perfection.png";
// import ShortcutStudyGuide from "@/assets/images/shortcut-study-guide.png";
// import Monogram3IdeaSketches from "@/assets/images/monogram-3-ideas-sketches.png";
// import MonogramFinal from "@/assets/images/monogram-final.png";
// import MonogramMockupInContext from "@/assets/images/monogram-mockup-in-context.png";
// import RecipeOneSheetIngredients from "@/assets/images/recipe-onesheet-ingredients.png";
// import RecipeOneSheetInstructions from "@/assets/images/recipe-onesheet-instructions.png";
// import IndependentStudyProjectCoverPage from "@/assets/images/Independent Study Project Cover page.png";
// import IndependentStudyProjectProposal from "@/assets/images/Independent Study Project Proposal.png";
// import IndependentStudyProjectReferences from "@/assets/images/Independent Study Project references.png";
// import IndependentStudyProjectTravelPage from "@/assets/images/Independent Study Project travel page.png";
// import IndependentStudyProjectPostcard from "@/assets/images/Independent Study Project Postcard.png";
// import IllustrativeSetPerfumePerfection from "@/assets/images/illustrative-set-perfume-perfection.png";
// import BeautyInCargoBlackandColoredVersion from "@/assets/images/beauty-in-cargo-black-and-colored-version.png";
// import BeautyInCargoCoverPage from "@/assets/images/beauty-in-cargo-cover-page.png";
// import BeautyInCargoBusinessCard from "@/assets/images/beauty-in-cargo-business-card.png";
// import BeautyInCargoThankYouLetter from "@/assets/images/beauty-in-cargo-thank-you-letter.png";
// import BeautyInCargoBusinessPackageFirstLayout from "@/assets/images/beauty-in-cargo-business-package-first-layout.png";
// import BeautyInCargoBusinessPackageSecondLayout from "@/assets/images/beauty-in-cargo-business-package-second-layout.png";
// import BeautyInCargoBusinessPackageThirdLayout from "@/assets/images/beauty-in-cargo-business-package-third-layout.png";
// import BeautyInCargoBusinessPackageFinalPackage from "@/assets/images/beauty-in-cargo-final-package.png";
// import BeautyInCargoInContext from "@/assets/images/beauty-in-cargo-in-context.png";
// import BeautyInCargoStyleGuideFinal from "@/assets/images/beauty-in-cargo-style-guide-final.png";
// import BeautyInCargoSticker from "@/assets/images/beauty-in-cargo-sticker.png";
// import SeaShellParadiseBeachCropAdjust from "@/assets/images/Sea_Shell_Paradise_Beach_CropAdjust.png";
// import BlendingModesWeeklyExercise from "@/assets/images/Blending_Modes_Weekly_Exercise.png";
// import ComplexBackgroundsWeeklyExercise from "@/assets/images/Complex_Backgrounds_Weekly_Exercise.png";
// import PersonalBrandingBlueprint from "@/assets/images/Personal_Branding_Blueprint.png";
// import PersonalBrandingBlueprintMyVision from "@/assets/images/My_Vision.png";
// import PersonalBrandingBlueprintCoreValues from "@/assets/images/Core_Values_Passions.png";
// import PersonalBrandingBlueprintGoals from "@/assets/images/Goals.png";
// import PersonalBrandingBlueprintBrandAttributes from "@/assets/images/Brand_Attributes.png";
// import PersonalBrandingBlueprintSWOTAnalysis from "@/assets/images/SWOT_Analysis.png";
// import PersonalBrandingBlueprintCompetition from "@/assets/images/Competition.png";
// import PersonalBrandingBlueprintThreeWordBrand from "@/assets/images/Three-Word_Brand.png";
// import PersonalBrandingBlueprintBrandManifesto from "@/assets/images/Personal_Brand_Manifesto.png";
// import ImpressMeCoverPage from "@/assets/images/Impress_Me_Cover_Page.png"
// import ImpressMeCarvingsIllustrations from "@/assets/images/Impress_Me_Carvings_Illustrations.png";
// import AttributesAssignmentCoverPage from "@/assets/images/Attributes_Assignment_Cover_Page.png";
// import AttributesAssignmentMyName from "@/assets/images/Attributes_Assignment_My_Name.png";
// import AttributesAssignmentPencilLabeling from "@/assets/images/Attributes_Assignment_Pencil_Labeling.png";
// import AttributesAssignmentIllustratorLabeling from "@/assets/images/Attributes_Assignment_Illustrator_Labeling.png";
// import MyFavoriteTypeAssignmentCoverPage from "@/assets/images/My_Favorite_Type_Assignment_Cover_Page.png";
// import MyFavoriteTypeAssignmentSketches from "@/assets/images/My_Favorite_Type_Assignment_Sketches.png";
// import MyFavoriteTypeAssignmentResearch from "@/assets/images/My_Favorite_Type_Assignment_Research.png";
// import MyFavoriteTypeAssignmentFinal from "@/assets/images/My_Favorite_Type_Assignment_Final.png";
// import YouCanQuoteMeAssignmentFinal from "@/assets/images/You_Can_Quote_Me_Assignment_Final_Page.png";
// import RapidDesign1AssignmentCoverPage from "@/assets/images/Rapid_Design_1_Assignment_Cover_Page.png";
import CustomizedInstagramIcon from "@/icons/icons/customized-instagram.svg";
import CustomizedFacebookIcon from "@/icons/icons/customized-facebook-logo.svg";
import CustomizedLinkedInIcon from "@/icons/icons/customized-linkedin-logo.svg";
import Navigation from "@/components/header/Navigation";
import Footer from "@/components/footer/Footer";
import { projects } from "@/data/index";




export default function Projects() {
  return (
    <>
      <header className="nav">
        <div className="logo">My Logo</div>
        <nav>
          <a href="/index.html">Home</a>
          <a href="/projects.html">Projects</a>
          <a href="/updates.html">Updates</a>
          <a href="/about.html">About</a>
          <a className="cta" href="/contact.html">Get In Touch</a>
        </nav>
      </header>

      <section className="projects-hero">
        <h1>My Projects</h1>
        <p>Over the past year and a half, I've created a range of digital artwork and design projects that reflect my
          dedication, growth, and evolving creative style. Each piece represents patience, refinement, and a strong
          attention to detail, even as I push past my own perfectionism. My digital artwork is colorful, abstract, and
          expressive often incorporating silhouettes and organic shapes that leave room for interpretation. My web
          design aesthetic is clean, simple, and modern, with subtle animations and thoughtful pops of color. I'm
          inspired by functional, user-centered UX design that feels both professional and visually engaging.
        </p>
      </section>

      <div className="projects-top-bar">
        <button data-filter="all" className="active">All Projects</button>
      </div>

      <div className="category-row">
        <button data-filter="personal">Personal Projects</button>
        <button data-filter="business">Business Projects</button>
      </div>

      <div className="status-row">
        <button data-filter="past">Past</button>
        <button data-filter="current">Current</button>
        <button data-filter="upcoming">Upcoming</button>
      </div>

      <main className="projects-wrapper">
        <div className={"projects-grid"}>


          {/* PAST */}

          <article className="project-card" data-category="personal past">
            <img src="images/classical-music-logo.jpg" />
            <div className="overlay">
              <h4>Classical Music Logo</h4>
              <p>Modern logo for a classical institution.</p>
            </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/weekly-exercise-animal-snow-leopard.png" />
            <div className="overlay">
              <h4>Weekly Exercise Animal Snow Leopard</h4>
              <p>A vibrant illustration representing the beauty and grace of the snow leopard.</p>
            </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/weekly-exercise-shell-sea-shell.png">
              <div className="overlay">
                <h4>Weekly Exercise Shell Sea Shell</h4>
                <p>A vibrant illustration representing the beauty and grace of the sea shell.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/weekly-exercise-fruit-orange.png">
              <div className="overlay">
                <h4>Weekly Exercise Fruit Orange</h4>
                <p>A vibrant illustration representing the beauty and grace of the orange.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/weekly-exercise-jellyfish.png">
              <div className="overlay">
                <h4>Weekly Exercise Jellyfish</h4>
                <p>A vibrant illustration representing the beauty and grace of the jellyfish.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/weekly-exercise-salon-chair.png">
              <div className="overlay">
                <h4>Weekly Exercise Salon Chair</h4>
                <p>A vibrant illustration representing the beauty and grace of the salon chair.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/weekly-exercise-plant-hydrangea-flower.png">
              <div className="overlay">
                <h4>Weekly Exercise Plant Hydrangea Flower</h4>
                <p>A vibrant illustration representing the beauty and grace of the hydrangea flower.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/weekly-exercise-flame-blue-fire.png">
              <div className="overlay">
                <h4>Weekly Exercise Fire Blue Flame</h4>
                <p>A vibrant illustration representing the beauty and grace of the blue flame.</p>
              </div>
          </article>


          <article className="project-card" data-category="personal past">
            <img src="images/weekly-exercise-car-lamborghini.png">
              <div className="overlay">
                <h4>Weekly Exercise Car Lamborghini</h4>
                <p>A vibrant illustration representing the beauty and grace of the Lamborghini.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/weekly-exercise-dessert-eclair.png">
              <div className="overlay">
                <h4>Weekly Exercise Dessert Eclair</h4>
                <p>A vibrant illustration representing the beauty and grace of the eclair.</p>
              </div>
          </article>

          <article className="project-card " data-category="personal past">
            <img src="images/weekly-exercise-extra-credit-holiday.png">
              <div className="overlay">
                <h4>Weekly Exercise Extra Credit Holiday</h4>
                <p>A vibrant illustration representing the beauty and grace of the holiday.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/illustrative-set-perfume-perfection-final.png">
              <div className="overlay">
                <h4>Illustrative Set Perfume Perfection</h4>
                <p>A vibrant illustration representing the beauty and grace of the perfume.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/shortcut-study-guide.png">
              <div className="overlay">
                <h4>Shortcut Study Guide</h4>
                <p>A study guide that I made for myself, that incldues colors, silhouettes, shapes, and
                  gradients. This assignment was intended to help me study for a mid-term exam, but I like how
                  visual this project turned out.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/monogram-3-ideas-sketches.png">
              <div className="overlay">
                <h4>Monogram 3 Ideas Sketches</h4>
                <p>A vibrant illustration representing the beauty and grace of the monogram.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/monogram-final.png">
              <div className="overlay">
                <h4>Monogram Final</h4>
                <p>A vibrant illustration representing the beauty and grace of the monogram.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/monogram-mockup-in-context.png">
              <div className="overlay">
                <h4>Monogram Mockup in Context</h4>
                <p>A vibrant illustration representing the beauty and grace of the monogram.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/recipe-onesheet-ingredients.png">
              <div className="overlay">
                <h4>Recipe One-sheet Ingredients</h4>
                <p>A vibrant illustration representing the beauty and grace of the recipe.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/recipe-onesheet-instructions.png">
              <div className="overlay">
                <h4>Recipe One-sheet Instructions</h4>
                <p>A vibrant illustration representing the beauty and grace of the recipe.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/Independent Study Project Cover page.png">
              <div className="overlay">
                <h4>Independent Study Project Cover Page</h4>
                <p>A vibrant illustration representing the beauty and grace of a cover page.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/Independent Study Project Proposal.png">
              <div className="overlay">
                <h4>Independent Study Project Proposal</h4>
                <p>A vibrant illustration representing the beauty and grace of the proposal.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/Independent Study Project references.png">
              <div className="overlay">
                <h4>Independent Study Project References</h4>
                <p>A vibrant illustration representing the beauty and grace of the references.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/Independent Study Project travel page.png">
              <div className="overlay">
                <h4>Independent Study Project Travel Page</h4>
                <p>A vibrant illustration representing the beauty and grace of the travel page.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/Independent Study Project Postcard.png">
              <div className="overlay">
                <h4>Independent Study Project Postcard</h4>
                <p>A vibrant illustration representing the beauty and grace of the postcard.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal past">
            <img src="images/illustrative-set-perfume-perfection.png">
              <div className="overlay">
                <h4>Illustrative Set Perfume Perfection</h4>
                <p>A vibrant illustration representing the beauty and grace of the perfume.</p>
              </div>
          </article>

          {/* CURRENT */}

          <article className="project-card" data-category="personal current">
            <img src="images/Sea_Shell_Paradise_Beach_CropAdjust.png">
              <div className="overlay">
                <h4>Sea Shell Paradise Beach</h4>
                <p>A vibrant image with sea shells, sand, and beautiful blue water was all edited and
                  created using Adobe Photoshop.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal current">
            <img src="images/Blending_Modes_Weekly_Exercise.png">
              <div className="overlay">
                <h4>Blending Modes Weekly Exercise</h4>
                <p>A weekly exercise exploring blending modes in Adobe Photoshop.</p>
              </div>
          </article>

          <article className="project-card" data-category="personal current" />
          <img src="images/Complex_Backgrounds_Weekly_Exercise.png" />
          <div className="overlay">
            <h4>Complex Backgrounds Weekly Exercise</h4>
            <p>A weekly exercise removing a blue sky that was originally apart of the image, and
              replacing it with this beautiful sunset, which also has color balance, and channeling
              features. This assignment was also made in Adobe Photoshop.</p>
          </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Personal_Branding_Blueprint.png">
            <div className="overlay">
              <h4>Personal Branding Blueprint</h4>
              <p>My personal branding blueprint.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/My_Vision.png">
            <div className="overlay">
              <h4>My Vision</h4>
              <p>My personal vision for my brand, and future goals.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Core_Values_Passions.png">
            <div className="overlay">
              <h4>Core Values & Passions</h4>
              <p>My core values and passions, expressed through creativity, digital drawings, and fun
                shapes.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Goals.png">
            <div className="overlay">
              <h4>Goals</h4>
              <p>My short and long-term goals for my career goals, and personal brand development.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Brand_Attributes.png">
            <div className="overlay">
              <h4>Brand Attributes</h4>
              <p>My brand attributes and characteristics that define my personal brand identity.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/SWOT_Analysis.png">
            <div className="overlay">
              <h4>SWOT Analysis</h4>
              <p>My SWOT analysis for my personal brand and career development.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Competition.png">
            <div className="overlay">
              <h4>Competition Analysis</h4>
              <p>An analysis of my competitors in the design industry, and in the design field I'm most
                interested in, UX/UI design.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Three-Word_Brand.png">
            <div className="overlay">
              <h4>Three-Word Brand</h4>
              <p>My three-word brand that describes my personal qualities, the design aesthetics I tend to
                go for, and what inspires my creative design process.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Personal_Brand_Manifesto.png">
            <div className="overlay">
              <h4>Personal Brand Manifesto</h4>
              <p>My personal brand manifesto that outlines my values, my purpose, who I am as a designer,
                my vision for what I want for my future, and what tech-industry/high-end job I want to
                be apart of.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Impress_Me_Cover_Page.png">
            <div className="overlay">
              <h4>Impress Me Cover Page</h4>
              <p>A cover page for an impress me project that was created using Adobe Illustrator.</p>
            </div>
        </article>


        <article className="project-card" data-category="personal current">
          <img src="images/Impress_Me_Carvings_Illustrations.png">
            <div className="overlay">
              <h4>Impress Me Carvings Illustrations</h4>
              <p>Potato Carvings, stamps, and Illustrations that were all made to make a final
                presentation using Adobe Illustrator and Potato Carving tools, and ink.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Attributes_Assignment_Cover_Page.png">
            <div className="overlay">
              <h4>Attributes Assignment Cover Page</h4>
              <p>A cover page for a type attributes assignment that was created using Adobe Illustrator.
              </p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Attributes_Assignment_My_Name.png">
            <div className="overlay">
              <h4>Attributes Assignment My Name</h4>
              <p>My name typed out to begin thinking of an idea of how I should label my name.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Attributes_Assignment_Pencil_Labeling.png">
            <div className="overlay">
              <h4>Attributes Assignment Pencil Labeling</h4>
              <p>My name labeled with pencil strokes, and key type attributes to show how I would label my
                name in a Adobe Illustrator.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Attributes_Assignment_Illustrator_Labeling.png">
            <div className="overlay">
              <h4>Attributes Assignment Illustrator Labeling</h4>
              <p>My name labeled in Adobe Illustrator with key type attributes to show the different key
                type attributes that are within my name.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/My_Favorite_Type_Assignment_Cover_Page.png">
            <div className="overlay">
              <h4>My Favorite Type Cover Page</h4>
              <p>A cover page showcasing my favorite family typeface category, which is Sloop Script.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/My_Favorite_Type_Assignment_Sketches.png">
            <div className="overlay">
              <h4>My Favorite Type Sketches</h4>
              <p>My sketches and concepts, planning and expressing what I wanted to create for My Favorite
                Typeface. I decided to go with a book, that looked slightly old, and elegant.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/My_Favorite_Type_Assignment_Research.png">
            <div className="overlay">
              <h4>My Favorite Type Research</h4>
              <p>My research notes talking about the history and characteristics behind Sloop Script typefaces,
                and how it was invented, where, and the origins of why it was invented.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/My_Favorite_Type_Assignment_Final.png">
            <div className="overlay">
              <h4>My Favorite Type Final Design</h4>
              <p>The final design of my favorite typeface, Sloop Script, showcasing its unique characteristics and
                application.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/You_Can_Quote_Me_Assignment_Final_Page.png">
            <div className="overlay">
              <h4>You Can Quote Me Final Design</h4>
              <p>The final design of my "You Can Quote Me" assignment, showcasing the ten quotes that I found
                most inspiring and meaningful, presented in a creative layout. I made a final version of the
                brain I created by only using
                words from the quote "Design Is Intelligence Made Visible".</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Rapid_Design_1_Assignment_Cover_Page.png">
            <div className="overlay">
              <h4>Rapid Design 1 Cover Page</h4>
              <p>A cover page for my Rapid Design 1 assignment, showcasing my design skills and creativity,
                created within an hour.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Rapid_Design_1_Assignment_Sketches.png">
            <div className="overlay">
              <h4>Rapid Design 1 Sketches</h4>
              <p>Various sketches and iterations for my Rapid Design 1 assignment, showcasing my design process
                and creativity.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Rapid_Design_1_Assignment_Moodboard.png">
            <div className="overlay">
              <h4>Rapid Design 1 Moodboard</h4>
              <p>A visual representation of my design inspirations and color palette for my Rapid Design 1
                assignment.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Rapid_Design_1_Assignment_Version_1.png">
            <div className="overlay">
              <h4>Rapid Design 1 Version 1</h4>
              <p>The first version of my Rapid Design 1 assignment, showcasing my design process and creativity,
                created within an hour.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Rapid_Design_1_Assignment_Version_2.png">
            <div className="overlay">
              <h4>Rapid Design 1 Version 2</h4>
              <p>The second version of my Rapid Design 1 assignment, showcasing my design process and creativity,
                created within an hour.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Rapid_Design_1_Assignment_Final_Version.png">
            <div className="overlay">
              <h4>Rapid Design 1 Final Version</h4>
              <p>The final version of my Rapid Design 1 assignment, showcasing my design process and creativity,
                created within an hour.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Rapid_Design_1_Assignment_Sticker.png">
            <div className="overlay">
              <h4>Rapid Design 1 Sticker</h4>
              <p>A sticker design for my Rapid Design 1 assignment, showcasing my design skills and creativity,
                created within an hour. I wanted to learn how to make a sticker eligible for printing, and what
                settings need to be applied to print a fun sticker.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Cover_Page.png">
            <div className="overlay">
              <h4>Cover Page</h4>
              <p>A professional campaign cover for Slingshot School for Parents, showcasing creativity, alignment,
                and clean visual design.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Letterhead.png">
            <div className="overlay">
              <h4>Letterhead</h4>
              <p>This is showcasing a letterhead I wrote to send to Tyler Lafferty, about my campaign
                project/proposal</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Project_Overview.png">
            <div className="overlay">
              <h4>Project Overview</h4>
              <p>A project overview for the Slingshot School for Parents campaign, outlining the concept and goals
                of the booklet.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_The_Problem.png">
            <div className="overlay">
              <h4>The Problem</h4>
              <p>This is showcasing what the problem is with parents overwhelming there children, and not knowing
                how to help them.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_The_Solution.png">
            <div className="overlay">
              <h4>The Solution</h4>
              <p>This is showcasing my proposed solution to help parents become a coach rather then micromanaging
                there children, and overwhelming them.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Moodboard.png">
            <div className="overlay">
              <h4>Moodboard</h4>
              <p>A visual representation of my design inspirations and color palette for my Slingshot Skool For
                Parents campaign/proposal.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Sketches.png">
            <div className="overlay">
              <h4>Sketched Concepts</h4>
              <p>Various sketches and iterations for my Slingshot Skool For Parents campaign/proposal, showcasing
                the different ideas that I had to come up with a solution for Tyler Lafferty's Slingshot Skool
                For Parents campaign.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Solution_1.png">
            <div className="overlay">
              <h4>Solution 1</h4>
              <p>This is showcasing my first solution for the Slingshot Skool For Parents campaign, which is a
                booklet that would be sent to parents to help them understand how to coach their children, and
                helpful methods they can look at to guide there children better.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Solution_2.png">
            <div className="overlay">
              <h4>Solution 2</h4>
              <p>This is showcasing my second solution for the Slingshot Skool For Parents campaign, which is a
                brochure, that would also be sent to parents.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_IDEAS_Framework.png">
            <div className="overlay">
              <h4>IDEAS Framework</h4>
              <p>This is showcasing what the IDEAS framework method is, and how it can help guide parents better
                so they can help there children succeed in school.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Booklet_Showcase.png">
            <div className="overlay">
              <h4>Booklet Showcase</h4>
              <p>This is showcasing my booklet design for the Slingshot Skool For Parents campaign, which is a
                booklet layout, I wanted to make it fun, visual, and look like a educational booklet. This
                showcases the cover page/back page, and inside pages, which includes a Table of Contents, as
                well as an About Tyler Lafferty Page.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Booklet_Showcase_2.png">
            <div className="overlay">
              <h4>Booklet Showcase 2</h4>
              <p>This is showcasing my second booklet design for the Slingshot Skool For Parents campaign, which
                is a booklet layout, this showcases what the next page looks like, What is Slingshot? Start
                Here, the IDEAS Framework, and The Solution.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Typography.png">
            <div className="overlay">
              <h4>Typography</h4>
              <p>This is showcasing the typography choices I made for my Slingshot Skool For Parents campaign
                booklet, which includes the font choices, and the different typefaces I used for the headings,
                subheadings, and body text.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Visual_System.png">
            <div className="overlay">
              <h4>Visual System</h4>
              <p>This is showcasing the visual system I created for my Slingshot Skool For Parents campaign
                booklet, which includes the color palette, and the different design elements I used to create a
                cohesive visual identity for the campaign.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img
            src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Booklet_Cover_Page_Back_Page.png">
            <div className="overlay">
              <h4>Booklet Cover Page & Back Page</h4>
              <p>This is showcasing the cover page and back page of my booklet design for the Slingshot Skool For
                Parents campaign, which includes the title, tagline, and a visual representation of the
                campaign's message.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Booklet_Inside_Page.png">
            <div className="overlay">
              <h4>Booklet Inside Page</h4>
              <p>This is showcasing an inside page of my booklet design for the Slingshot Skool For Parents
                campaign, which includes the Table of Contents, and an About Tyler Lafferty page that gives
                information about who Tyler Lafferty is, and what he does as the Executive Director of
                Slingshot.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Booklet_What_Is_Slingshot.png">
            <div className="overlay">
              <h4>What Is Slingshot?</h4>
              <p>This is showcasing an inside page of my booklet design for the Slingshot Skool For Parents
                campaign, which includes information about what Slingshot is, and what they do to help students
                succeed in school. This also showcases the membership costs, to join Slingshot Skool For
                Parents.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Booklet_IDEAS_Framework.png">
            <div className="overlay">
              <h4>IDEAS Framework</h4>
              <p>This is showcasing an inside page of my booklet design for the Slingshot Skool For Parents
                campaign, which includes information about the IDEAS framework, and how it can help guide
                parents better so they can help there children succeed in school.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Real_Examples.png">
            <div className="overlay">
              <h4>Real Examples</h4>
              <p>This is showcasing what my booklet looks like in real life, and how it came out.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_In_Context_Final_Proposal.png">
            <div className="overlay">
              <h4>In Context Final Proposal</h4>
              <p>This is showcasing what my booklet design for the Slingshot Skool For Parents campaign looks like
                in context, and how it can be used to help parents become better coaches for their children.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Slingshot_Skool_For_Parents_3_Final_Version_Assignment_Thank_You_Page.png">
            <div className="overlay">
              <h4>Thank You Page</h4>
              <p>This is showcasing a thank you page that I designed for my Slingshot Skool For Parents campaign
                proposal, which includes my company brand logo.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Animated_Album_Cover_Assignment_Sketches.png">
            <div className="overlay">
              <h4>Animated Album Cover Sketches</h4>
              <p>Various sketches and iterations for my Animated Album Cover assignment, showcasing my design
                process and creativity. My Inspiration was the song Tom Sawyer, by Rush.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Animated_Album_Cover_Assignment_Moodboard.png">
            <div className="overlay">
              <h4>Animated Album Cover Moodboard</h4>
              <p>A visual representation of my design inspirations and color palette for my Animated Album Cover
                assignment, which was inspired by the song Tom Sawyer, by Rush.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Animated_Album_Cover_Assignment_B&W_Version_First_Draft.png">
            <div className="overlay">
              <h4>Animated Album Cover B&W Version First Draft</h4>
              <p>The first draft of my Animated Album Cover assignment, showcasing my design process and
                creativity. This version is in black and white, and was the first version I created for this
                assignment.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Animated_Album_Cover_Assignment_Final_Version_With_Color.png">
            <div className="overlay">
              <h4>Animated Album Cover Final Version With Color</h4>
              <p>The final version of my Animated Album Cover assignment, showcasing my design process and
                creativity. This version is in color, and was the final version I created for this assignment.
              </p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Explore_Magazine_Cover_Assignment.png">
            <div className="overlay">
              <h4>Explore Magazine Cover</h4>
              <p>A futuristic magazine cover inspired by virtual worlds, urban cityscapes, and anime aesthetics.
                Designed in Photoshop to capture a vibrant cyberpunk atmosphere.</p>
            </div>
        </article>

        <article className="project-card" data-category="personal current">
          <img src="images/Creative_Invention_Assignment_AD.png">
            <div className="overlay">
              <h4>Creative Invention AD</h4>
              <p>This project showcases a beautiful, unique, beauty advertisement that I designed using brushes,
                filters, blending modes, and used various layer adjustment effects within Photoshop.</p>
            </div>
        </article>


        {/* UPCOMING */}

        {/* BUSINESS PROJECTS */}

        <article className="project-card" data-category="business past">
          <img src="images/beauty-in-cargo-black-and-colored-version.png">
            <div className="overlay">
              <h4>Beauty In Cargo Black and Colored Version</h4>
              <p>This project showcases my brand's logo, Beauty In Cargo, in both black and colored
                versions, demonstrating versatility in design.</p>
            </div>
        </article>

        <article className="project-card" data-category="business past">
          <img src="images/beauty-in-cargo-cover-page.png">
            <div className="overlay">
              <h4>Beauty In Cargo Cover Page</h4>
              <p>This project showcases my brand's cover page for Beauty In Cargo, demonstrating design
                and layout skills.</p>
            </div>
        </article>

        <article className="project-card" data-category="business past">
          <img src="images/beauty-in-cargo-business-card.png">
            <div className="overlay">
              <h4>Beauty In Cargo Business Card</h4>
              <p>This project showcases my brand's business card for Beauty In Cargo, demonstrating design
                and layout skills.</p>
            </div>
        </article>

        <article className="project-card" data-category="business past">
          <img src="images/beauty-in-cargo-thank-you-letter.png">
            <div className="overlay">
              <h4>Beauty In Cargo Thank You Letter</h4>
              <p>This project showcases my brand's thank you letter design for Beauty In Cargo,
                demonstrating design and layout skills.</p>
            </div>
        </article>

        <article className="project-card" data-category="business past">
          <img src="images/beauty-in-cargo-business-package-first-layout.png">
            <div className="overlay">
              <h4>Beauty In Cargo Business Package First Layout</h4>
              <p>This project showcases my brand's business package design for Beauty In Cargo,
                demonstrating design and layout skills.</p>
            </div>
        </article>

        <article className="project-card" data-category="business past">
          <img src="images/beauty-in-cargo-business-package-second-layout.png">
            <div className="overlay">
              <h4>Beauty In Cargo Business Package Second Layout</h4>
              <p>This project showcases my brand's second business package design for Beauty In Cargo,
                demonstrating design and layout skills.</p>
            </div>
        </article>

        <article className="project-card" data-category="business past">
          <img src="images/beauty-in-cargo-business-package-third-layout.png">
            <div className="overlay">
              <h4>Beauty In Cargo Business Package Third Layout</h4>
              <p>This project showcases my brand's third business package design for Beauty In Cargo,
                demonstrating design and layout skills.</p>
            </div>
        </article>

        <article className="project-card" data-category="business past">
          <img src="images/beauty-in-cargo-final-package.png">
            <div className="overlay">
              <h4>Beauty In Cargo Final Package</h4>
              <p>This project showcases my brand's final business package design for Beauty In Cargo,
                demonstrating design and layout skills.</p>
            </div>
        </article>

        <article className="project-card" data-category="business past">
          <img src="images/beauty-in-cargo-in-context.png">
            <div className="overlay">
              <h4>Beauty In Cargo In Context</h4>
              <p>This project showcases my brand's logo, Beauty In Cargo, in context, demonstrating
                versatility in design.</p>
            </div>
        </article>

        <article className="project-card" data-category="business past">
          <img src="images/beauty-in-cargo-style-guide-final.png">
            <div className="overlay">
              <h4>Beauty In Cargo Style Guide Final</h4>
              <p>This project showcases my brand's style guide for Beauty In Cargo, demonstrating design
                and layout skills.</p>
            </div>
        </article>

        <article className="project-card" data-category="business past">
          <img src="images/beauty-in-cargo-sticker.png">
            <div className="overlay">
              <h4>Beauty In Cargo Sticker</h4>
              <p>This project showcases my brand's sticker design for Beauty In Cargo, demonstrating
                design and layout skills.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/SilhouetteBeauty_MyBrandingCoverPage.png">
            <div className="overlay">
              <h4>Silhouette Beauty Cover Page</h4>
              <p>This project showcases my brand's cover page design for Silhouette Beauty, demonstrating
                design and layout skills.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/SilhouetteBeauty_MyBrandingSketches.png">
            <div className="overlay">
              <h4>Silhouette Beauty Sketches</h4>
              <p>This project showcases my brand's sketches for Silhouette Beauty, demonstrating
                fun ideas, and a creative thought process.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/SilhouetteBeauty_MyBranding5Ws.png">
            <div className="overlay">
              <h4>Silhouette Beauty's 5W's</h4>
              <p>This project showcases my brand's 5W's for Beauty In Cargo, demonstrating
                what my business is, what is special about it, and why I created Silhouette Beauty.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/SilhouetteBeauty_MyBrandingPitch.png">
            <div className="overlay">
              <h4>Silhouette Beauty Pitch</h4>
              <p>This project showcases my brand's pitch deck for Silhouette Beauty, demonstrating
                certain styles I was going for in my brand, colors, fonts, and shapes.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/SilhouetteFrames_MyBrandingIdea_1_Page.png">
            <div className="overlay">
              <h4>Silhouette Frames Branding Idea 1</h4>
              <p>This project showcases the first brand design I had, which is called Silhouette Frames.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/SilhouetteBeauty_MyBrandingIdea_2_Page.png">
            <div className="overlay">
              <h4>Silhouette Beauty Branding Idea 2</h4>
              <p>This project showcases the second brand design I had, which is called Silhouette Beauty.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/ModernSilhouettes_MyBrandingIdea_3_Page.png">
            <div className="overlay">
              <h4>Modern Silhouettes Branding Idea 3</h4>
              <p>This project showcases the third brand design I had, which is called Modern Silhouettes.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/ElegantShapes_MyBrandingIdea_4_Page.png">
            <div className="overlay">
              <h4>Elegant Shapes Branding Idea 4</h4>
              <p>This project showcases the fourth brand design I had, which is called Elegant Shapes.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/EntwiningDesigns_MyBrandingIdea_5_Page.png">
            <div className="overlay">
              <h4>Entwining Designs Branding Idea 5</h4>
              <p>This project showcases the fifth brand design I had, which is called Entwining Designs.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/SimplePortraits_MyBrandingIdea_6_Page.png">
            <div className="overlay">
              <h4>Simple Portraits Branding Idea 6</h4>
              <p>This project showcases my brand's cover page design for Simple Portraits, demonstrating
                design and layout skills.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/SimplePortraits_Pick_1_of_3_Final_Selections.png">
            <div className="overlay">
              <h4>Simple Portraits Final Selection 1 of 3</h4>
              <p>Simple Portraits is the first final selection of three main logo designs I was choosing from,
                to officially use for my business.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/SilhouetteBeauty_Name_Pick_2_of_3_Final_Selections.png">
            <div className="overlay">
              <h4>Silhouette Beauty Name Final Selections 2 of 3</h4>
              <p>Silhouette Beauty is the second final selection of three main brand names/designs I was choosing
                from,
                to officially use for my business.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/EntwiningDesigns_Pick_3_of_3_Final_Selections.png">
            <div className="overlay">
              <h4>Entwining Designs Final Selections 3 of 3</h4>
              <p>Entwining Designs is the third and final selection of three main logo designs I was choosing
                from, to officially use for my business.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/SilhouetteBeauty_MyBranding_Final_Selection_Rough_Draft_Version.png">
            <div className="overlay">
              <h4>Silhouette Beauty Final Selection Rough Draft Version</h4>
              <p>Silhouette Beauty is the brand logo/design I ended up going with. This was my rough draft version
                of my chosen design.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/SilhouetteBeauty_MyBranding_Final_Selection_Final_Version.png">
            <div className="overlay">
              <h4>Silhouette Beauty Final Selection Final Version</h4>
              <p>Silhouette Beauty is the brand logo/design I ended up going with. This was my final version of my
                chosen design.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/SilhouetteBeauty_MyBranding_BusinessCard_Front_Side.png">
            <div className="overlay">
              <h4>Silhouette Beauty Business Card Front Side</h4>
              <p>This is the front side of my business card for Silhouette Beauty.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/SilhouetteBeauty_MyBranding_BusinessCard_Back_Side.png">
            <div className="overlay">
              <h4>Silhouette Beauty Business Card Back Side</h4>
              <p>This is the back side of my business card for Silhouette Beauty.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/SilhouetteBeauty_MyBranding_BusinessPackage_Layout_1.png">
            <div className="overlay">
              <h4>Silhouette Beauty Business Package Layout 1</h4>
              <p>This is the first layout of my business package for Silhouette Beauty.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/SilhouetteBeauty_MyBranding_BusinessPackage_Layout_2.png">
            <div className="overlay">
              <h4>Silhouette Beauty Business Package Layout 2</h4>
              <p>This is the second layout of my business package for Silhouette Beauty.</p>
            </div>
        </article>

        <article className="project-card" data-category="business projects">
          <img src="images/SilhouetteBeauty_MyBranding_BusinessPackage_Layout_3.png">
            <div className="overlay">
              <h4>Silhouette Beauty Business Package Layout 3</h4>
              <p>This is the third layout of my business package for Silhouette Beauty.</p>
            </div>
        </article>

      </div>
    </div >
    </main >
    </>
  );
}

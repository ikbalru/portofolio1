import About from './home/partials/about';
import ChooseMe from './home/partials/chooseMe';
import ContactForm from './home/partials/contact-form';
import FAQ from './home/partials/faq';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import Projects from './home/partials/projects';
import Skill from './home/partials/skill';
import Testimonials from './home/partials/testimonials';
import WorkExperience from './home/partials/work-experience';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <ChooseMe />
      <Projects />
      <WorkExperience />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;

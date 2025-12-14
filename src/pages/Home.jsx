import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import FeaturedProjects from '../components/FeaturedProjects';
import Clients from '../components/Clients';
import Suppliers from '../components/Suppliers';
import Products from '../components/Products';
import ValueProposition from '../components/ValueProposition';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Metrics />
      <FeaturedProjects />
      <ValueProposition />
      <Clients />
      <Suppliers />
      <Products />
      <CTA />
    </>
  );
};

export default Home;

// app/page.js
import Navbar from '@/components/Navbar';
import HeroWithForm from '@/components/HeroWithForm';
import Offerings from '@/components/Offerings';
import Certifications from '@/components/Certifications';
import NewLaunches from '@/components/NewLaunches';
import ScrollingStats from '@/components/ScrollingStats';
import WhyUs from '@/components/WhyUs'; 
import ComparisonSection from '@/components/ComparisonSection';
import Footer from '@/components/Footer';
import ImportantLinks from '@/components/ImportantLinks';

export default function Home() {
  return (
    <div>
      <Navbar /> 
      <main>
        <HeroWithForm />

        
        <Offerings />
        <Certifications />
        <NewLaunches />
        <ScrollingStats/>
        <WhyUs/>
        <ComparisonSection/>
        
        
      </main>
      <Footer />
      <ImportantLinks/>
    </div>
  );
}
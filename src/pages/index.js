import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { homeObjOne } from '../components/InfoSection/Data';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection1 from '../components/InfoSection1';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Solutions from "../components/Solutions";
import Faqs from "../components/Faqs";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    } 

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <HeroSection />
    <Services />
    <InfoSection {...homeObjOne} />
    <Solutions />
    {/* <Faqs /> */}
    <InfoSection1 {...homeObjOne} />
    <Footer />
    </>
    );
};

export default Home;

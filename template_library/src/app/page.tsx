import Image from "next/image";
import Hero1 from "./sections/hero/heroVariant1";
import AboutUs1 from "./sections/aboutUs/aboutUsVariant1";
import AboutUs2 from "./sections/aboutUs/aboutUsVariant2";
import AboutUs3 from "./sections/aboutUs/aboutUsVariant3";
import Clients1 from "./sections/clients/clientsVariant1";
import Clients2 from "./sections/clients/clientsVariant2";
import Clients3 from "./sections/clients/clientsVariant3";

export default function View() {
  return (
    <>
       <Hero1 />
       {/* <AboutUs1/> */}
       {/* <AboutUs2/> */}
       {/* <AboutUs3/> */}
       <Clients1/>
       <Clients2/>
       <Clients3/>
    </>
     

  );
}

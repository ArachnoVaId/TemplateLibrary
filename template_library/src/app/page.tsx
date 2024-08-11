import Image from "next/image";
import Hero1 from "./sections/hero/heroVariant1";
import AboutUs1 from "./sections/aboutUs/aboutUsVariant1";
import AboutUs2 from "./sections/aboutUs/aboutUsVariant2";
import AboutUs3 from "./sections/aboutUs/aboutUsVariant3";
import Clients1 from "./sections/clients/clientsVariant1";
import Clients2 from "./sections/clients/clientsVariant2";
import Clients3 from "./sections/clients/clientsVariant3";
import Cta1 from "./sections/cta/ctaVariant1";
import Cta2 from "./sections/cta/ctaVariant2";
import Cta3 from "./sections/cta/ctaVariant3";
import Cta4 from "./sections/cta/ctaVariant4";
import Location1 from "./sections/location/locationVariant1";
import Location2 from "./sections/location/locationVariant2";
import Location3 from "./sections/location/locationVariant3";

export default function View() {
  return (
    <>
       <Hero1 />
       <AboutUs1/>
       <AboutUs2/>
       <AboutUs3/>
       {/* <Clients1/>
       <Clients2/>
       <Clients3/> */}
       {/* <Cta1/>
       <Cta2/>
       <Cta3/>
       <Cta4/> */}
       {/* <Location1/>
       <Location2/>
       <Location3/> */}
    </>
     

  );
}

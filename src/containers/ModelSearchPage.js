import React from "react";
import SectionFooter from "../components/Footer/SectionFooter";
import Filter from "../components/Filter/Filter";

export default function HomePage() {
   document.body.style.backgroundImage = 'none';
   return (
      <div>
         <Filter />
         <SectionFooter />
      </div>
   );
}

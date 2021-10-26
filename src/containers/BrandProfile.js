import React, { useEffect } from 'react';
import SectionFooter from "../components/Footer/SectionFooter";
import BrandInfo from "../components/BrandInfoPage/BrandInfo";

export default function BrandInfoPage(props) {
   console.log('hihi ',props.match.params.id)
   
   document.body.style.backgroundImage = 'none';
   return (
    
      <div>
      <BrandInfo pageOffset={props.match.params.id}/>
      <SectionFooter />
   </div>
   );
}

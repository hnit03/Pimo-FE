import React from "react";
import SectionFooter from "../components/Footer/SectionFooter";
import FilterBand from "../components/Filter/FilterBrand";

export default class HomePage extends React.Component {
   render() {

   document.body.style.backgroundImage = 'none';
      // console.log(this.props.history);
      return (
         <div>
            <FilterBand pageOffset={this.props.match.params.id}/>
            <SectionFooter />
         </div>
      )
   }
}

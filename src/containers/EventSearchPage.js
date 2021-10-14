import React from "react";
import SectionFooter from "../components/Footer/SectionFooter";
import FilterEvent from "../components/Filter/FilterEvent";

export default class HomePage extends React.Component {
   render() {

   document.body.style.backgroundImage = 'none';
      // console.log(this.props.history);
      return (
         <div>
            <FilterEvent pageOffset={this.props.match.params.id}/>
            <SectionFooter />
         </div>
      )
   }
}

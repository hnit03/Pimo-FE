import React from "react";
import SectionFooter from "../components/Footer/SectionFooter";
import Filter from "../components/Filter/Filter";

export default class HomePage extends React.Component {
   render() {

   document.body.style.backgroundImage = 'none';
      // console.log(this.props.history);
      return (
         <div>
            <Filter pageOffset={this.props.match.params.id}/>
            <SectionFooter />
         </div>
      )
   }
}

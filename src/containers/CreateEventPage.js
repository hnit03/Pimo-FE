import React from 'react';
import SectionFooter from "../components/Footer/SectionFooter";
import CreateEventForm from '../components/CreateEventForm/CreateEventForm';

export default function CreateEventPage() {
   document.body.style.backgroundImage = 'none';
   return (
      <>
         <CreateEventForm />
         <SectionFooter />
      </>
   );
}

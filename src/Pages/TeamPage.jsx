import React from 'react'

import { WhychooseUsComponent } from "../Components/WhychooseUsComponent"
import TeamMembersComponent from '../Components/TeamMembersComponent'
import { ServicesSectionHomePage } from '../Components/ServicesSectionHomePage'
import { TestimonialsComponent } from '../Components/TestimonialsComponent'
export const TeamPage = () => {
  return (
    <section className='Team-Page container-'>

      <WhychooseUsComponent></WhychooseUsComponent>
      <TeamMembersComponent></TeamMembersComponent>
      <ServicesSectionHomePage></ServicesSectionHomePage>
      <TestimonialsComponent></TestimonialsComponent>
    </section>

  )
}

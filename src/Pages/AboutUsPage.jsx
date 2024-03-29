import React from 'react'
import { AboutusComponent } from '../Components/AboutusComponent'
import TeamMembersComponent from '../Components/TeamMembersComponent'
import { WhychooseUsComponent } from '../Components/WhychooseUsComponent'
import { ClientReviewComponent } from '../Components/ClientReviewComponent'
import { ClientsLogo } from '../Components/WebSiteData'
import { ClientsLogoComponent } from '../Components/ClientsLogoComponent'

export const AboutUsPage = () => {
  return (
    <section className='About-Us-Page'>

      <AboutusComponent></AboutusComponent>
      <TeamMembersComponent></TeamMembersComponent>
      <WhychooseUsComponent></WhychooseUsComponent>
      <ClientReviewComponent></ClientReviewComponent>
      <ClientsLogoComponent></ClientsLogoComponent>





    </section>
  )
}

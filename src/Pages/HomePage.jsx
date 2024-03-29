import React from 'react'
import { HeroSection } from '../Components/HeroSectionHomePage'
import { ServicesSectionHomePage } from '../Components/ServicesSectionHomePage'
import { WhychooseUsComponent } from '../Components/WhychooseUsComponent'
import { ProjectsComponent } from '../Components/ProjectsComponent'
import { WorkProcessHomePage } from '../Components/WorkProcessHomePage'
import { TestimonialsComponent } from '../Components/TestimonialsComponent'
import { ClientsLogoComponent } from '../Components/ClientsLogoComponent'
import { FAQComponent } from '../Components/FAQComponent'

export const HomePage = () => {
    return (
        <section className='Home-Page'>
            <HeroSection></HeroSection>
            <ServicesSectionHomePage></ServicesSectionHomePage>
            <WhychooseUsComponent></WhychooseUsComponent>
            <ProjectsComponent></ProjectsComponent>
            <WorkProcessHomePage></WorkProcessHomePage>
            <TestimonialsComponent></TestimonialsComponent>
            <ClientsLogoComponent></ClientsLogoComponent>
            <FAQComponent></FAQComponent>
        </section>
    )
}

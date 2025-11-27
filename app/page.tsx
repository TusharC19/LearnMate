import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'

const Page = () => {
  return (
    <main>
    <h1 className="text-2xl">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
        id="456"
        name="jfj"
        topic="NLP"
        subject="English"
        duration={45}
        color="#ffda6e"
        />
        <CompanionCard
        id="457"
        name="abc"
        topic="Machine Learning"
        subject="Math"
        duration={30}
        color="#a1cfff"
        />
        <CompanionCard
        id="458"
        name="xyz"
        topic="Data Science"
        subject="Science"
        duration={60}
        color="#ff9a9a"
        />

      </section>

      <section className="home-section">
        <CompanionsList/>
        <CTA/>
      </section>
   
  


    </main>
  )
}

export default Page
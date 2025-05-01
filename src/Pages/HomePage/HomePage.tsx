import React from 'react'
import NavBar from '../../components/NavBar'
import { Banner } from '../../components/Banner'
import { Projects } from '../../components/Projects'
import { Skills } from '../../components/Skills'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <>
        <NavBar/>
        <Banner />
        <Projects />
        <Skills />
        <Footer />
    </>
  )
}

export default HomePage
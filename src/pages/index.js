import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from './hero'
import Stats from './stats'
import Team from './team'
import Testimonial from './testimonial'
import CTA from './cta'
import Why from './why'
import FAQ from './faq'
import Logo from './logo'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main id="toor">
    <Hero></Hero><hr></hr>
    <CTA></CTA>
    <Stats></Stats><hr></hr>
    <Logo></Logo><hr></hr>
    <Team></Team><hr></hr>
    <Testimonial></Testimonial>
    <Why></Why><hr></hr>
    <FAQ></FAQ><hr></hr>
    <Footer></Footer>
    </main>
  )
}

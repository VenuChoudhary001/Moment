import Head from 'next/head'
import Image from 'next/image'
import Hero from '../sections/landing/hero'
import Section2 from '../sections/landing/section2'
import Section3 from '../sections/landing/section3'
import Section4 from '../sections/landing/section4'
import Section5 from '../sections/landing/section5'
import Section6 from '../sections/landing/section6'
import Section7 from '../sections/landing/section7'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Hero/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    </>
  )
}

import Image from 'next/image'
import React from 'react'
import TextBox from '../../components/textBox'

const Hero = () => {
  return (
    <section className='grid containe grid-cols-2 place-items-cente gap-4'>
    <main className="relative">
        <Image 
        layout='fill'
        priority
        // objectFit='cover'
        src={"/images/contact_hero.webp"}
        />
    </main>
    <div className="flex flex-col gap-2 max-w-[500px]">
        <TextBox lable={"First name"} placeholder="Your first name"/>
        <TextBox lable={"Last name"} placeholder="Your last name"/>
        <TextBox  lable={"Email address"} placeholder="Your email address"/>
        <TextBox lable={"First name"} placeholder="Your first name"/>
        <TextBox lable={"Last name"} placeholder="Your last name"/>
        <TextBox  lable={"Email address"} placeholder="Your email address"/>
        {/* <TextBox/>
        <TextBox/>
        <TextBox/>
        <TextBox/> */}
    </div>
    </section>
  )
}

export default Hero
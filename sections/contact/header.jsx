import React from 'react'
import Button from '../../components/button'

const Header = () => {
  return (
    <>
    <div className="bg-white">

    <main className='container flex justify-between items-center p-4 md:p-8'>
     <img src="/images/logo_black.svg" alt="" className="" />
     <Button 
     textColor={"text-white"}
     bgColor={"bg-secondary"}
     placeholder="Join waitlist"
     />
    </main>
    </div>
    </>
  )
}

export default Header
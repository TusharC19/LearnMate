import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import NavItems from './NavItems'


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/" >
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image src="/images/logo.svg" alt="logo" height={46} width={46} />
                </div>
            </Link>
            <div  className="flex items-center gap-6 cursor-pointer">
                <NavItems/>
                <p>H</p>


            </div>
        </nav>
    )
}

export default Navbar
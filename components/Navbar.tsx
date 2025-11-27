import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import {SignInButton,SignedIn,SignedOut,UserButton} from "@clerk/nextjs";

const Navbar = () =>{
    return (
        <nav className="navbar">
            <Link href="/" >
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image src="/images/logo.svg" alt="logo" height={46} width={46} />
                </div>
            </Link>
            <div className="flex items-center gap-6 cursor-pointer">
                <NavItems/>
                    <SignedOut>
                        <SignInButton>
                            <button className="btn-signin">Sign In</button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>



            </div>
        </nav>
    )
}

export default Navbar
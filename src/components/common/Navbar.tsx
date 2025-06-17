"use client"

import Link from "next/link";
import { NAVBAR_LINKS } from "@/app/constants/NavLinks";
import { Menu } from "lucide-react";
import { Sheet, SheetHeader, SheetTitle, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";


/**
This component represents the navigation bar shared across pages.
*/
export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed py-6 bg-white w-full flex flex-row justify-between items-center custom-padding z-10">

            {/* Icon title */}
            <Link className='flex flex-row items-center space-x-4' href='/'>
                <h6 className='text-h4-heading !font-alkalmi pt-2'>Playbits</h6>
            </Link>


            {/* Menu links */}
            <div className='hidden md:flex justify-center items-center space-x-8 lg:space-x-12 xl:space-x-16'>
                {/* Navlinks */}
                {
                    NAVBAR_LINKS.map((navbarLink, index) => (
                        <Link key={ index } href={ navbarLink.path } className='text-paragraph-large hover:text-gray-500 duration-200'>{ navbarLink.label }</Link>
                    ))
                }
                {/* Button */}
                <Button className='green-button'>
                    <Link href='/create' className='pt-3'>Create</Link>
                </Button>

            </div>



            {/* Hamburger menu and sheet icon */}
            <div className='block md:hidden'>
                <Sheet open={ open } onOpenChange={ setOpen }>
                <SheetTrigger asChild>
                    <Menu className='text-black hover:text-gray-500 w-6 h-6 cursor-pointer duration-200' />
                </SheetTrigger>
                <SheetContent className="w-screen bg-white p-8">
                    <SheetHeader>
                        <SheetTitle>
                        </SheetTitle>
                    </SheetHeader>

                    <div className="flex flex-col justify-center items-center space-y-16 text-paragraph h-4/5">
                        {
                            NAVBAR_LINKS.map((navbarLink, index) => (
                                <Link key={ index } href={ navbarLink.path }
                                    className='text-h6-heading hover:text-gray-500 duration-200'
                                    onClick={ () => setOpen(false) }
                                >{ navbarLink.label }</Link>
                            ))
                        }
                        <Button className='green-button'>
                            <Link href='/create' className='pt-3' onClick={ () => setOpen(false) }>Create</Link>
                        </Button>
                    </div>
                </SheetContent>
                </Sheet>
            </div>

            
        </nav>
    );
  }
  
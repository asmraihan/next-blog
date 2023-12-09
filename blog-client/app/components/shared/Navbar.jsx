"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const authLinks = [
    { href: '/blogs', label: 'Blogs' },
    { href: '/blogs/add', label: 'Write' },
    { href: '/profile', label: 'Profile' },
]

const guestLinks = [
    { href: '/blogs', label: 'Blogs' },
    { href: '/login', label: 'Login' },
    { href: '/register', label: 'Register' }
]

const Navbar = () => {
    const { status, data, update} = useSession()
    // console.log(status)
    // console.log(data)
    // console.log(update)
    return (
        <section className='sticky w-full bg-gray-100'>
            <nav className='flex items-center justify-between px-8 py-4 bg-transparent'>
                    {/* logo */}
                    <Link href='/' className='text-gray-900 font-bold tracking-wider flex'>
                            <Image width={30} height={30} src="/logo.svg" />
                            <p>Next Blog</p>
                    </Link>
                    <div className='flex items-center gap-4 p-2'>
                        {(status === 'authenticated' ? authLinks : guestLinks).map((item) => (
                            <Link key={item.href} href={item.href}>
                                <p className='text-gray-900 font-semibold  hover:text-gray-600 duration-300'>{item.label}</p>
                            </Link>
                        ))}
                    </div>
            </nav>
        </section>
    )
}

export default Navbar
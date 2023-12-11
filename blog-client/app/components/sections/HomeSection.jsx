import React from 'react'
import Image from 'next/image'
import { getAllBlogs } from '@/actions/blog'


const HomeSection = async() => {
    console.log(`${process.env.NEXT_PUBLIC_API}/blog/getAllBlogs`)
    const blogs = await getAllBlogs(6)
    console.log(blogs)
    return (
        <section className='w-full my-4'>
            <div className='w-full flex xs:flex-col md:flex-row justify-center items-center'>
                <div className='p-8 w-3/4 flex flex-col gap-3'>
                    <p className='tracking-wide lg:text-6xl md:text-3xl xs:text-2xl font-semibold md:w-2/4 xs:4/4 text-start text-gray-900'>
                        Welcome to Next Blog
                    </p>
                    <p className='tracking-wider lg:text-2xl md:text-2xl xs:text-xl font-semibold md:w-3/4 xs:w-full text-start text-gray-900'>
                        This is a blog application built with Next.js, Tailwind CSS, and MongoDB.
                    </p>
                </div>
                <div className='md:w-2/4 xs:w-3/4 md:mx-2 xs-my-2  '>
                        <Image src='/imgs/tech-blogs-1.jpg' width={600} height={400} 
                            className = 'w-full rounded-2xl drop-shadow-2xl '
                            alt='carrousel'
                        />
                </div>
            </div>
            <hr className='p-3 my-4' />
            <div className='flex flex-col justify-center items-center'>
                <div className='p-4 '>
                <h2 className='text-2xl font-semibold'>Recent Articles</h2>
                </div>
                <div className='flex w-full flex-wrap justify-center'>
                            
                </div>
            </div>
        </section>
    )
}

export default HomeSection
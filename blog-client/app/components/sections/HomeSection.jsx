import React from 'react'
import Image from 'next/image'
import { getAllBlogs } from '@/actions/blog'
import BlogItem from './BlogItem'



const HomeSection = async() => {
    const blogs = [
        {
          id: '65748d60b8d4f4b34ee99b62',
          title: 'sadsad t',
          content: 'sadsadas content',
          imageUrl: '1702137184808i-nyoman-adi-wiraputra-ID11BpE0REM-unsplash.jpg',
          location: 'locationsad',
          createdAt: '2023-12-09T15:53:04.812Z',
          updatedAt: '2023-12-09T15:53:04.812Z',
          userId: '657322b671bbcea1d7dbfbaa',
          categoryId: '657487149d62fdf6412200b2'
        },
        {
          id: '65748d60b8d494b34ee69b62',
          title: 'sadsad t',
          content: 'sadsadas content',
          imageUrl: '1702137184808i-nyoman-adi-wiraputra-ID11BpE0REM-unsplash.jpg',
          location: 'locationsad',
          createdAt: '2023-12-09T15:53:04.812Z',
          updatedAt: '2023-12-09T15:53:04.812Z',
          userId: '657322b671bbcea1d7dbfbaa',
          categoryId: '657487149d62fdf6412200b2'
        },
        {
          id: '65748d60b8d4f4b34e969b62',
          title: 'sadsad t',
          content: 'sadsadas content',
          imageUrl: '1702137184808i-nyoman-adi-wiraputra-ID11BpE0REM-unsplash.jpg',
          location: 'locationsad',
          createdAt: '2023-12-09T15:53:04.812Z',
          updatedAt: '2023-12-09T15:53:04.812Z',
          userId: '657322b671bbcea1d7dbfbaa',
          categoryId: '657487149d62fdf6412200b2'
        },
        {
          id: '65748d6098d4f4b34ee69b62',
          title: 'sadsad t',
          content: 'sadsadas content',
          imageUrl: '1702137184808i-nyoman-adi-wiraputra-ID11BpE0REM-unsplash.jpg',
          location: 'locationsad',
          createdAt: '2023-12-09T15:53:04.812Z',
          updatedAt: '2023-12-09T15:53:04.812Z',
          userId: '657322b671bbcea1d7dbfbaa',
          categoryId: '657487149d62fdf6412200b2'
        },
        {
          id: '65749dd094cf5daec96ca403',
          title: 'sadsa',
          content: 'asdsad',
          imageUrl: '1702137294378i-nyoman-adi-wiraputra-ID11BpE0REM-unsplash.jpg',
          location: 'locationsad',
          createdAt: '2023-12-09T15:54:54.511Z',
          updatedAt: '2023-12-09T16:07:26.559Z',
          userId: '657322b671bbcea1d7dbfbaa',
          categoryId: '657487149d62fdf6412200b2'
        }
      ]
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
                        {blogs.map((blog) => (
                            <BlogItem {...blog} />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default HomeSection
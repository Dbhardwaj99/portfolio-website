'use client';

import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import TiltCard  from '@/components/tiltcard'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'

const HomePage = () => {
  const router = useRouter()
  return (
    <div className='justify-center text-center gap-6 h-screen w-screen text-black sm:pt-[200px] pt-[100px]'>
      <div className='py-[40px]'>
        <p className='text-6xl sm:text-9xl py-[10px]'><span>Hello World!</span><span className='wave'>👋</span></p>
        <p className='justify-center first-letter:text-2xl px-[20px] sm:px-[200px] sm:text-xl'>
          I&#39;m Divyansh Bhardwaj, I am a 4th year Engineering Grad Student from India, 
          I love tech and I love building and breaking code. I am originally from Bihar, India and I am pursuing my engineering degree from Sikkim Manipal Institute of Technology, Sikkim.
          I like Comic-books, Kanye West, Fighter Jets and Space.
        </p>
      </div>
      <div className='sm:px-[150px] px-[20px] col-start-2 flex justify-center gap-6 flex-wrap'>
        <div onClick={() => router.push('/projects')}><TiltCard cardTitle='My Projects' cardIcon='💼'/></div>
        <div onClick={() => router.push('/blogs')}><TiltCard cardTitle='My Blogs' cardIcon='✍️'/></div>
        <div onClick={() => router.push('/notes')}><TiltCard cardTitle='My Notes' cardIcon='📝'/></div>
        <div onClick={() => router.push('/music')}><TiltCard cardTitle='My Music' cardIcon='🎧'/></div>
      </div>
      <footer>

      </footer>
    </div>
  )
}

export default HomePage

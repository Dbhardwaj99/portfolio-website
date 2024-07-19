import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import TiltCard  from '@/components/tiltcard'

const HomePage = () => {
  return (
    <div className='justify-center text-center gap-6 h-screen w-screen text-black pt-[200px]'>
      <div className='py-[40px]'>
        <p className='text-6xl sm:text-9xl py-[10px]'>Hello World!👋</p>
        <p className='justify-center first-letter:text-2xl px-[20px] sm:px-[200px] sm:text-xl'>
          I'm Divyansh Bhardwaj, I am a 4th year Engineering Grad from India, 
          I love tech and I love building and breaking code. I am originally from Bihar, India and I am pursuing my engineering degree from Sikkim Manipal Institute of Technology, Sikkim.
          I like Comic-books, Kanye West, Fighter Jets and Space.
        </p>
      </div>
      <div className='sm:px-[150px] px-[20px] col-start-2 flex justify-center gap-6'>
        <TiltCard cardTitle='My Projects' cardIcon='💼'/>
        <TiltCard cardTitle='My Blogs' cardIcon='✍️'/>
        <TiltCard cardTitle='My Notes' cardIcon='📝'/>
        <TiltCard cardTitle='My Music' cardIcon='🎧'/>
      </div>
    </div>
  )
}

export default HomePage

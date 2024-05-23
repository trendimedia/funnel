
import { dark } from '@clerk/themes'
import Navigation from '@/components/site/navigation'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const layout =  ({children}: {children:React.ReactNode}) => {
  return (
    <main className='h-full '>
      <ClerkProvider 
    appearance={{baseTheme: dark}}>
      <Navigation />
        {children}
    </ClerkProvider>
        
    </main>
  )
}

export default layout
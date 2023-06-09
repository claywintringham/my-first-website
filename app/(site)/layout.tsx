import Link from 'next/link'
import '../globals.css'
import { Inter } from 'next/font/google'
import { getPages } from '@/sanity/sanity-utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Awesome Site',
  description: 'Generated by Next + Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
   //get all of the pages
const pages = await getPages();

 return (
  <html lang="en">
    <body className='max-w-3xl mx-auto py-10'>
   
      <header className="flex items-center justify-between"> 
     
      <Link rel="stylesheet" 
      href="" 
      className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
      > Clay</Link>

      <div className='flex items-center gap-5 text-sm text-gray-600'>
        {pages.map((page) => (
          <Link key={pages._id} 
          href={`/${page.slug}`}
          className='hover:underline'>
            {page.title} 
          </Link>
        ))}
      </div>
     
      </header>
    
      <main className='py-20 '>{children}</main>
    </body>
    </html>
  )
}




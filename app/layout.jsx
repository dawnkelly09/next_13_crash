/*things you want to appear on every page (header, footer, etc) import and embed here
*/
import './globals.css'
import Header from './components/Header'
import { Josefin_Sans, Josefin_Slab } from 'next/font/google'

//heading font
const josefinSans = Josefin_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700']
})
//body text font
const josefinSlab = Josefin_Slab({ 
  subsets: ['latin'], 
  weight: ['400', '700']
})


//global metadata, keywords, tags
export const metadata = {
  title: 'Traversy Media',
  description: 'Web development tutorials and courses',
  keywords: 'web development, web design, javascript, react'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/**adding the font const + className here applies it to all body text */}
      <body className={josefinSlab.className}>
        <Header />
        {/**adding className container here applies the global css container class to the body */}
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}

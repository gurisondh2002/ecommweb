import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import dynamic from 'next/dynamic'
const inter = Inter({ subsets: ['latin'] })
const Navigationbar = dynamic(
  ()=>import('@/components/NavBar/navbar'),
  {suspense:true}
)
const Footer = dynamic(
  ()=>import('@/components/Footer/footer'),
  {suspense:true}
)


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navigationbar /> */}
        {children}
        {/* <Footer/> */}
        </body>
    </html>
  )
}
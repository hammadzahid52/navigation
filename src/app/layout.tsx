import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import './globals.css'
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      {children}
      <Footer />

      </body>
    </html>
  )
}

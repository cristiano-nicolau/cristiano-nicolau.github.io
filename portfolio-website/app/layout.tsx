import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cristiano Nicolau - Portfolio',
  description: 'Portfolio of Cristiano Nicolau, showcasing projects and skills in web development, software engineering, and data science.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

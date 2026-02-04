import type { Metadata } from 'next'
import '../client/src/index.tsx'
import '../app/globals.css'

export const metadata: Metadata = {
  title: 'Analytics Dashboard',
  description: 'Analytics Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

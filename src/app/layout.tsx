import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/fonts.css'
import '@/styles/tailwind.css'
import '@/styles/theme.css'
import '@/styles/index.css'
import ClientLayout from './components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DenStack - Premium Dental Practice Management',
  description: 'Enterprise-grade dental practice management software with AI capabilities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
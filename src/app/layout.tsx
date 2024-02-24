'use client'

import React from 'react'

import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-#fff">{children}</body>
    </html>
  )
}

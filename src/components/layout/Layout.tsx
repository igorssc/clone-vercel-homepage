import * as React from 'react'
import clsx from 'clsx'
import Head from 'next/head'
import Header from '@components/layout/Header'
import { Footer } from '@styles/components/Footer'

export interface Props {
  title?: string
  className?: string | Record<string, unknown>
}

const Layout: React.FC<Props> = ({ title, className, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className={clsx('flex-grow', className)}>{children}</main>
        <Footer className="font-semibold text-black dark:text-white">
          Explore the Vercel way
        </Footer>
      </div>
    </>
  )
}

export default Layout

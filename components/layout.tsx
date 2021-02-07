import { NextPage } from 'next'
import Head from 'next/head';
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

const name = 'yaffi'
export const siteTitle = 'Yaffi'

interface IProps {
  children: any,
  home?: any,
}

export default function Layout({ children, home }: IProps) {
  return (
    <div className="min-h-screen flex flex-col bg-trueGray-800">
      <header className="h-16 p-3 shadow-2xl bg-gray-800 relative">
        <Link href="/">
          <a>
            <p className="text-4xl text-fuchsia-800 absolute inset-x-4">Yaffi</p>
            <p className="text-4xl text-yellow-400 absolute">Yaffi</p>
          </a>
        </Link>
      </header>
      <main className="grid grid-cols-9 gap-8 p-10">
        {children}
      </main>
      <footer className="h-4 m-6 p-4 border-t-2 border-gray-200 border-opacity-25">
        <p className="text-gray-200 text-center">Yaffi財団</p>
      </footer>
    </div>
  )
}
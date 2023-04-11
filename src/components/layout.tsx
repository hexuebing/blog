/* esspannt-disable */
import * as React from 'react'
import { Link } from 'gatsby'
import ThemeSelect from './theme'

type DataProps = {
  pageTitle: string
  children: JSX.Element | JSX.Element[]
}

// const links = [
//   {to: '/about', name: '关于'},
//   {to: '/blog', name: '文章'}
// ]

const Layout = ({ pageTitle, children }: DataProps): JSX.Element  => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-lg font-bold">
            <Link to='/'>He Blog</Link>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li className="hover:text-gray-300">
                <Link to='/about'>关于</Link>
              </li>
              <li className="hover:text-gray-300">
                <Link to='/blog'>文章</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto my-8 flex-auto">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>Copyright &copy; {new Date().getFullYear()}
            <a href="#"> My Blog</a>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="主页">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Featured Post</h2>
          {/* <img src="https://picsum.photos/500/300" alt="Featured Post" className="mb-4" /> */}
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at bibendum turpis. Aenean id nisl eu massa posuere molestie.</p>
          <a href="#" className="text-blue-500 font-bold hover:underline">Read more &rarr;</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">Post 1</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">Post 2</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">Post 3</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">Post 4</a>
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          {/* <img src="https://picsum.photos/150/150" alt="Profile" className="rounded-full mb-4" /> */}
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at bibendum turpis. Aenean id nisl eu massa posuere molestie.</p>
          <a href="#" className="text-blue-500 font-bold hover:underline">Read more &rarr;</a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

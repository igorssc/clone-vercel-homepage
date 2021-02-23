import * as React from 'react'
import { NextPage } from 'next'
import Layout from '@components/layout/Layout'
import { FeaturedTitle } from '@styles/components/FeaturedTitle'
import { Wrapper } from '@styles/components/Wrapper'
import { Description } from '@styles/components/Description'

const IndexPage: NextPage = () => {
  return (
    <Layout title="My Project" className="container py-8">
      <Wrapper>
        <FeaturedTitle className="text-black dark:text-black">
          <h2 className="dark:invert-color-title m-1">Develop.</h2>
          <h2 className="dark:invert-color-title m-1">Preview.</h2>
          <h2 className="dark:invert-color-title m-1">Ship.</h2>
        </FeaturedTitle>

        <div className="dark:buttons-dark">
          <button className="transition-all duration-500 ease-in-out bg-black py-3 px-12 mx-3 my-24 rounded font-medium border-2 border-black text-white hover:text-black hover:bg-white dark:border-white">
            Start Coding
          </button>
          <button className="transition-all duration-500 ease-in-out bg-white py-3 px-12 mx-3 my-24 rounded font-medium border-2 border-gray-400 text-gray-600 hover:text-black hover:bg-white hover:border-black dark:bg-black dark:text-white">
            Get a Demo
          </button>
        </div>

        <Description>
          Vercel combines the best developer experience with an obsessive focus
          on end-user performance. Their platform enables frontend teams to do
          their best work.
        </Description>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

import * as React from 'react'
import Layout from '../components/layout'
import type { HeadFC, PageProps } from "gatsby"

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>About Me</title>

export default AboutPage
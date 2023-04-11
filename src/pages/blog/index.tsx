import * as React from 'react'
import Layout from '../../components/layout'
import { Link } from 'gatsby'
import links from './link.json'

const getLinks = () => {
  let result = []
  for(let key in links){
    const tab = <div className='text-xl' key={key}>{key.toUpperCase()}</div>
    const res = links[key].map((item: any) => <span className='block link-primary leading-7' key={item.slug}><Link to={item.slug}>{item.title}</Link></span>)
    result.push(tab, res)
  }
  return result
}

const Index = () => <Layout pageTitle='blog'>
  <div>{ getLinks() }</div>
</Layout>

export default Index
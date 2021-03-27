import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"
import Search from "../components/SearchContainer"

export default function about() {
  return (
    <div>
      <Layout>
        <Search />
        <Title text="Search bar" />
     
      </Layout>
    </div>
  )
}

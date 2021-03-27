import React, { lazy, Suspense} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

// import ArticleList from '../components/article-list'
const ArticleList = lazy(() => import(`../components/article-list`));


//import styles from "./index.module.scss"
export default function Home({data}) {
  return (
    <div>
      <Layout>
        <Title text="Welcome" />
       
       <Link to="/about">Search bar</Link>
        <p>Recent posts are here. Click for detail.</p>
        <Suspense fallback={<div>still loading...</div>}>
          <ArticleList />
        </Suspense>
      </Layout>
    </div>
  )
}

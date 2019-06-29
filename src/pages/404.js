import React from "react"
import Layout from "../components/layout"

export default ({ data }) => {

  return (
    <Layout currentPath='/'>
      <div className="cd-intro behind" />
      <div className="page-body">
        <h1 className="form-title about-header">Oops!</h1>
        <p>We couldn't find that page.</p>
      </div>
    </Layout>
  )
}

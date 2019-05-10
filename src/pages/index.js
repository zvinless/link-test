import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ location: { origin } }) => {
  let test = "https://www.google.com"
  return(
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>
      <a href="https://eloquent-bassi-2f286c.netlify.com/somewhere">Go Somewhere</a>
    </div>
    <div>
      {/* This ends up adding /undefined between origin and /somewhere */}
      <a href={`${origin}/somewhere`}>Go Somewhere (Undefined)</a>
    </div>
    <div>
      <a href={`${test}/asdf`}>Go Somewhere (Undefined)</a>
    </div>
  </Layout>
)
}

export default IndexPage

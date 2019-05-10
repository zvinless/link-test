import React from "react"

const IndexPage = ({ location: { origin } }) => (
  <div>
    <div>
      <a href="https://eloquent-bassi-2f286c.netlify.com/somewhere">Go Somewhere</a>
    </div>
    <div>
      {/* This ends up adding /undefined between origin and /somewhere */}
      <a href={`${origin}/somewhere`}>Go Somewhere (Undefined)</a>
    </div>
  </div>
)

export default IndexPage

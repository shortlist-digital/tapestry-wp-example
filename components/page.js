import React from 'react'

const Page = props =>
  <section>
    <h1>
      {props.short_headline || props.title.rendered}
    </h1>
    <p>
      {props.acf.sell}
    </p>
  </section>

export default Page

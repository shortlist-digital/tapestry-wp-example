import React from 'react'
import { css } from 'glamor'

const title = css({
  fontSize: '60px',
  fontWeight: 'bold',
  marginBottom: '24px'
})
const sell = css({
  fontSize: '24px'
})

const Page = props =>
  <section>
    <h1 className={title}>
      {props.short_headline || props.title.rendered}
    </h1>
    <p className={sell}>
      {props.acf.sell}
    </p>
  </section>

export default Page

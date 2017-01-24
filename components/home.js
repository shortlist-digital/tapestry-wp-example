import React from 'react'
import { css } from 'glamor'

const title = css({
  fontSize: '60px',
  fontWeight: 'bold',
  marginBottom: '24px'
})

const Home = props =>
  <section>
    <h1 className={title}>
      Home
    </h1>
  </section>

export default Home

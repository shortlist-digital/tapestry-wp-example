import React from 'react'
import { css } from 'glamor'

const style = css({
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '900px',
  paddingBottom: '40px',
  paddingTop: '40px'
})

const Base = props =>
  <section className={style}>
    {props.children}
  </section>

export default Base

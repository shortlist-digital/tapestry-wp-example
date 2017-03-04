import React from 'react'
import { css } from 'glamor'
import Helmet from 'react-helmet'
import tokens from 'tokens'

const style = css({
  color: tokens.color.highlight
})

export default (props) =>
  <div>
    <Helmet title="DEV" />
    <h1 className={style}>
      FrontPage
    </h1>
  </div>

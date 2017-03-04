import React from 'react'
import Page from './components/page'
import Post from './components/post'
import FrontPage from './components/frontpage'
import Error from './components/error'

export default {
  components: {
    Page,
    Post,
    FrontPage,
    Error
  },
  routes: [{
    path: 'async',
    getComponent: (next, cb) =>
      import('./components/async.js')
        .then(module => cb(null, module.default))
        .catch(err => console.error(err))
  }, {
    path: 'static',
    component: () => <h1>Static route</h1>
  }],
  siteUrl: 'http://shortliststudio.foundry.press'
}

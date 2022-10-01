import Layout from '../layout'
import '../styles/globals.css'
import React, { useState,useEffect } from 'react'
function MyApp({ Component, pageProps }) {
  



  return <>
  <Layout>

  <Component {...pageProps} />
  </Layout>
  </>
}

export default MyApp

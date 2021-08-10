import React from "react"
import Favicon from "react-favicon"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"

function IndexPage() {
  return (
    <Layout>
      <Favicon url="/images/logos/Logo3_sl.png" />
      <SEO title="DropNFT" />
      <HeroSection />
      <img src="/images/logos/Logo3_sl.png" alt="logo" />
      <h1>
        Protect and sell your unique, creative digital files and NFTs within
        Dropbox.{" "}
      </h1>
      <p>
        DropNFT is the easiest way to do more with your creative digital work
        stored on Dropbox — protect or sell them as NFTs.{" "}
      </p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export default IndexPage

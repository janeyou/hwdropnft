import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import PurchaseButton from "../Buttons/PurchaseButton"
import MockupAnimation from "../animations/MockupAnimation"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <img src="/images/logos/Logo3_sl.png" alt="logo" />
          <Title>
            Protect and sell your unique, creative <br /> digital files and NFTs
            within Dropbox.
          </Title>
          <Description>
            DropNFT is the easiest way to do more with your creative digital
            work stored on Dropbox — protect or sell them as NFTs.{" "}
          </Description>
          <PurchaseButton title="Start minting" subtitle="Do more with NFTs" />
          <Link to="/page-2/">Go to page 2</Link> <br />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  overflow: hidden;
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 200px 30px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 150px 20px 250px;
    gap: 60px;
  }
`
const TextWrapper = styled.div`
  max-width: 1200px;
  display: grid;
  gap: 30px;
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  @media (max-width: 450px) {
    font-size: 48px;
  }
`

const Description = styled(MediumText)``

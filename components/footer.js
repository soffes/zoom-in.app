import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 640px;
  margin: 0 auto;
  margin: 70px auto;
  color: #89929a;

  @media all and (max-width: 660px) {
    width: 300px;
  }

  p {
    font-size: 17px;
  }

  a {
    color: #89929a;

    &:hover {
      color: #5a4c8f;
    }
  }
`

const Footer = (props) => {
  return(
    <FooterContainer>
      <p>
        © 2020 <a href="https://nothingmagical.com" rel="external nofollow" style={{ marginRight: '2rem' }}>Nothing Magical Inc.</a>
        <a href="/privacy">Privacy</a>
      </p>
      <p>In case it wasn’t obvious, this has absolutely zero affiliation with Zoom.</p>
    </FooterContainer>
  )
}

export default Footer

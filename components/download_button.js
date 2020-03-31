import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  display: block;
  text-align: center;
  background-color: #503EFA;
  border-radius: 6px;
  width: 227px;
  height: 55px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`
const DownloadButton = (props) => {
  return(
    <Button href={props.url} rel="external nofollow">
      Download Zoom In
    </Button>
  )
}

DownloadButton.defaultProps = {
  "url": "https://github.com/nothingmagical/ZoomIn/releases/download/v1.0/ZoomIn-1.0.zip"
}

export default DownloadButton

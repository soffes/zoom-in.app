import styled from 'styled-components'
import Page from '../components/page'
import Subheading from '../components/subheading'
import DownloadButton from '../components/download_button'
import { TwitterVideoEmbed } from 'react-twitter-embed';

export default () => (
  <Page>
    <Subheading>Safari extension to open Zoom links</Subheading>
    <p>Are you Zooming all the time? Are you tired of telling Safari it’s okay to open Zoom links in Zoom? Have I got the app for you!</p>
    <p>Zoom In is an app that installs a Safari extension. This extension does one thing. Well two. It automatically opens Zoom links in the Zoom app. If that works, (here comes the second thing) it will close the tab so you don’t have tons of ”Opening in Zoom…“ tabs left in your browser.</p>
    <p>That’s it. That’s the app.</p>
    <p>Simple as that. <strong>It’s free.</strong> Enjoy!</p>
    <p style={{marginBottom: '4rem'}}>
      <DownloadButton />
    </p>
    <TwitterVideoEmbed id={'1244841086314409984'} />
  </Page>
)

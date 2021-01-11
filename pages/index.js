import styled from 'styled-components'
import Page from '../components/page'
import Subheading from '../components/subheading'
import DownloadButton from '../components/download_button'
import { TwitterVideoEmbed } from 'react-twitter-embed';

export default () => (
  <Page>
    <Subheading>Safari extension to automatically open Zoom links</Subheading>

    <p><strong>Update:</strong> Zoom keeps changing their page which breaks Zoom In. Since I no longer use Zoom, Zoom In isn’t maintained any more. The code is still <a href="https://github.com/soffes/ZoomIn">on GitHub</a> if you want to mess with it though.</p>

    <p>Are you Zooming all the time? Are you tired of telling Safari it’s okay to open Zoom links in Zoom? Have I got the app for you!</p>

    <p>Zoom In is an app that installs a Safari extension. This extension does two things. <mark>It automatically opens Zoom links in the Zoom app.</mark> If that works, it will automatically close the tab so you don’t have tons of ”Opening in Zoom…“ tabs left in your browser.</p>
    <p style={{marginBottom: '2rem'}}>Simple as that. <strong>It’s free.</strong> Enjoy!</p>

    <p style={{marginBottom: '4rem'}}>
      <DownloadButton />
    </p>

    <TwitterVideoEmbed id={'1244841086314409984'} />
  </Page>
)

import Page from '../components/page'
import SubHeading from '../components/subheading'

export default () => (
  <Page title="Privacy">
    <SubHeading>Privacy</SubHeading>

    <p>Zoom In has 3 components: the app, the native Safari extension, and the JavaScript Safari extension. None of the components have permission from the system to make incoming or outgoing network connections. There isn’t any analytics or tracking or anything like that.</p>

    <p>The app only shows information about how to use the extension and a button to open the extension’s preferences in Safari.</p>

    <p>The JavaScript component, can only access <code>*.zoom.us</code> pages. Zoom In is unaware of any other pages you navigate to. It can’t see them or track them or whatever else. All it does is look for the native Zoom URL on Zoom pages  and pass it along to its native counterpart.</p>

    <p>The native Safari extension only handles messages from the JavaScript component. This simply opens the URL passed to it using standard macOS APIs. If this works, it uses the Safari extension API to close the tab. Again, no private APIs.</p>

    <p>You can see all of the source code for the app <a href="https://github.com/nothingmagical/ZoomIn" rel="external nofollow">on GitHub</a>. Feel free to build it yourself (although please don’t redistribute it). If you have any questions, please open an issue on the repo. I’d be happy to answer them!</p>
  </Page>
)

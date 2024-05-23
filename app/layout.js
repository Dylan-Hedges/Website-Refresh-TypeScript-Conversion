//Imports the global CSS file - this is loaded/applied to every page
import './globals.css'
//Imports font from Google Fonts
import {Rubik} from 'next/font/google'

//==Component Imports==
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'


//Configures the imported Google font, applied to <Body> as a class - In this case only downloads/uses latin characters, here can specify font weight etc, fonts are self-hosted on your domain so it doesnt need to make requests to Google Fonts for the font
const rubik = Rubik({ subsets: ['latin'] })

//Defines metadata
export const metadata = {
  title: 'Dylan Hedges Portfolio',
  description: 'Portfolio website for Dylan Hedges',
}

//Layout component - wraps around all components/pages - apply navbar and footer components here, {children} = the page curently being viewed in the browser  (e.g. About), {children} changes whenw e navigate to different pages
export default function RootLayout({ children }) {
  //<body> contains the children/page currently being viewed
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        <div className='content-container'>
          <div className='content-item'>
            {children}
          </div>
        </div>
        <div className='footer-container'>
          <div className='footer-item'>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}

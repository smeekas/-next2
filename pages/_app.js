import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp


//! even staticpath fallback set to true. once nextJS fetches the page it will be in build folder so when data get updated on certain API it will not be updated on our webApp.
//! even for small changes we have to re-build the App.

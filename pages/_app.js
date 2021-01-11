import React, { useEffect } from 'react';
import Router from 'next/router';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;

import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="tE9loPcaLN8KwCUoQXPOJZjkRdqRAsoUtNE3FoKI"
      serverUrl="https://ddjujy0i4207.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;

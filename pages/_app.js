import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="I3KOseVLs9jeBdL6j609DUda4MYOVOVo9tdLrCOb"
      serverUrl="https://a81hnw6oiazc.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;

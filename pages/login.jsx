import { useMoralis, useNFTBalances } from "react-moralis";
import Link from "next/link";

export default function Login() {
  const { authenticate, logout, isAuthenticated, account } = useMoralis();
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances();

  if (data) {
    console.log(
      data.result.filter(
        (token) =>
          token.token_address === "0x1427db973f9428d8a9211e177d9e53b21f314bcd"
      )
    );
  }
  return (
    <div>
      <button
        onClick={() => authenticate({ onError: () => console.log("erreur") })}
      >
        Login
      </button>
      {isAuthenticated ? (
        <>
          <p>Bonjour {account}</p>
          <button onClick={() => getNFTBalances()}>Refetch NFTBalances</button>
          <button onClick={() => logout()}>se deconnecter</button>
        </>
      ) : (
        <p>Vous netespas connexter</p>
      )}
      <Link href={"/"} passHref>
        <a>home</a>
      </Link>
    </div>
  );
}

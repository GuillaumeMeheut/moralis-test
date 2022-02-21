import { useMoralis, useNFTBalances } from "react-moralis";

export default function Login() {
  const { authenticate, logout, isAuthenticated, account } = useMoralis();
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances();

  console.log(
    data.result.filter(
      (token) =>
        token.token_address === "0x1427db973f9428d8a9211e177d9e53b21f314bcd"
    )
  );
  return (
    <div>
      <button onClick={() => authenticate()}>Login</button>
      {isAuthenticated ? (
        <>
          <p>Bonjour {account}</p>
          <button onClick={() => getNFTBalances()}>Refetch NFTBalances</button>
          <button onClick={() => logout()}>se deconnecter</button>
        </>
      ) : (
        <p>Vous netespas connexter</p>
      )}
    </div>
  );
}

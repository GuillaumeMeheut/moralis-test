import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import Moralis from "moralis";
import abi from "../utils/abi/test.json";
export default function Home() {
  const { isAuthenticated, isWeb3Enabled } = useMoralis();
  const { data, error, fetch, isFetching, isLoading } =
    useWeb3ExecuteFunction();

  const contractAddress = "0xF8E4cA950DaaB8fB6eD8ec8e77780a91BD88456D";

  const getNb = () => {
    const options = {
      abi,
      contractAddress,
      functionName: "getNumber",
    };
    fetch({ params: options });
    console.log(error);
  };

  const setNb = async (number) => {
    const options = {
      abi,
      contractAddress,
      functionName: "setNumber",
      params: {
        _number: number,
      },
    };
    fetch({ params: options });
    console.log(error);
  };

  return (
    <div>
      {isAuthenticated ? "connecté" : "pas connecté"}
      <button onClick={() => getNb()}>get number</button>
      <button onClick={() => setNb(20)}>set number</button>
      <p>{data ? parseInt(data._hex, 16) : "Pas de data"}</p>
    </div>
  );
}

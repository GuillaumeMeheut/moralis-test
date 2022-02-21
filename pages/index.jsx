import { useMoralis } from "react-moralis";

export default function Home() {
  const { authenticate, isAuthenticated, user } = useMoralis();

  return (
    <div>
      Home
      <p>{isAuthenticated ? "Vous etes autentifié" : "pas identifier"}</p>
    </div>
  );
}

import { useMoralis } from "react-moralis";
import Link from "next/link";

export default function Home() {
  const { authenticate, isAuthenticated, user } = useMoralis();

  return (
    <div>
      Home
      <p>{isAuthenticated ? "Vous etes autentifié" : "pas identifier"}</p>
      <Link href={"/login"} passHref>
        <a>Login</a>
      </Link>
      <Link href={"/contract"} passHref>
        <a>contract</a>
      </Link>
    </div>
  );
}

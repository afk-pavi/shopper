import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
    </main>
  );
}

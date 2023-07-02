import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>resan</h1>
      <Link href={"/about"}>about</Link>
    </main>
  );
}

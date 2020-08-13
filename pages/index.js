import Link from "next/link";
import Image from "../components/Image";

const Index = () => (
  <div>
    <h1>SSR Magican</h1>
    {/* <a href="/about">About</a> */}
    <Link href="/about">
      <button>About</button>
    </Link>
    <Link href="/robots">
      <button>Robots</button>
    </Link>
    <Image />
  </div>
);

export default Index;

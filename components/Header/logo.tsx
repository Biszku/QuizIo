import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="main-header_logo">
      <span className="main-header_logo_text">Quiz</span>
      <span className="main-header_logo_text-decorate">io</span>
    </Link>
  );
}

export default Logo;

import Link from "next/link";
import scss from "./Header.module.scss";

const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <nav className={scss.nav}>
            <Link href="/">All</Link>
            <Link href="/akatsuki">Akatsuki</Link>
            <Link href="/tailed-beasts">Tailed-beasts</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

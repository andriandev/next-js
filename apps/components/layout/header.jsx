import ActiveLink from '@/components/shared/active-link';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <ActiveLink href="/" activeClassName="active">
            <a>Home</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/about" activeClassName="active">
            <a>About</a>
          </ActiveLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;

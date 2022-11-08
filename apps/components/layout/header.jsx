import ActiveLink from '@/components/shared/active-link';
import { siteTitle } from '@/config/setting';

function Header() {
  return (
    <header>
      <div>{siteTitle()}</div>
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

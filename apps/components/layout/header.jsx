import ActiveLink from '@/components/shared/active-link';
import { siteTitle } from '@/config/setting';

function Header() {
  return (
    <header>
      <div>{siteTitle()}</div>
      <ul>
        <li>
          <ActiveLink href="/" className="" activeClassName="active">
            Home
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/about" className="" activeClassName="active">
            About
          </ActiveLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;

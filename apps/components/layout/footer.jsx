import Link from 'next/link';
import { siteTitle } from '@/config/setting';

function Footer() {
  return (
    <footer>
      <p>
        Copyright ©{new Date().getFullYear() + ' '}
        <Link href="/">
          <a>{siteTitle()}</a>
        </Link>
      </p>
    </footer>
  );
}

export default Footer;

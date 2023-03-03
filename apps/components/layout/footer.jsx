import Link from 'next/link';
import { siteTitle } from '@/config/setting';

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        {`Copyright © ${currYear} `}
        <Link href="/">{siteTitle()}</Link>
      </p>
    </footer>
  );
}

export default Footer;

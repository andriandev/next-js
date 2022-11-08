import Link from 'next/link';

function Footer() {
  return (
    <footer>
      <p>
        Copyright ©{new Date().getFullYear() + ' '}
        <Link href="/">
          <a>Next App</a>
        </Link>
      </p>
    </footer>
  );
}

export default Footer;

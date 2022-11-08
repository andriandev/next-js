import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-light">
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

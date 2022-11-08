import Header from '@/layout/header';
import Footer from '@/layout/footer';

function Main(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Main;

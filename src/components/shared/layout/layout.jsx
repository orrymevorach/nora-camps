import Nav from '../nav-bar/nav-bar';
import Footer from '../footer';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

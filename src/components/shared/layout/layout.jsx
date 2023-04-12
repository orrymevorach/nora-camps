import Nav from '../nav-bar/nav-bar';
import Footer from '../Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

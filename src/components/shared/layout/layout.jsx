import Nav from '../nav-bar/nav-bar';
import Footer from '../footer/foot';
import Newsletter from '../newsletter/newsletter';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const { route } = useRouter();

  const mapToRouteName = {
    '/mail': false,
    '/contact': false,
  };

  console.log(mapToRouteName[route]);
  console.log(route);

  return (
    <div>
      <Nav />
      <main>{children}</main>
      {mapToRouteName[route] !== false && <Newsletter />}
      <Footer />
    </div>
  );
}

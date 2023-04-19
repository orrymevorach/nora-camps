import Nav from "../nav-bar/nav-bar";
import Footer from "../footer/foot";
import Newsletter from "../newsletter/newsletter";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Newsletter />
      <Footer />
    </div>
  );
}

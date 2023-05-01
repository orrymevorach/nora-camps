import Nav from "../nav-bar/nav-bar";
import Footer from "../footer/footer";
import Newsletter from "../newsletter";
import { useRouter } from "next/router";

export default function Layout({ children, paintingsAndCollections }) {
  const { route } = useRouter();
  const showNewsletter = route !== "/mail" && route !== "/contact";

  return (
    <div>
      <Nav paintingsAndCollections={paintingsAndCollections} />
      <main>{children}</main>
      {showNewsletter && <Newsletter />}
      <Footer />
    </div>
  );
}

import Nav from "../nav-bar/nav-bar";
import Footer from "../footer/foot";
import Newsletter from "../newsletter";
import { useRouter } from "next/router";

export default function Layout({ children, allPaintingsAndCollections }) {
  const { route } = useRouter();
  const showNewsletter = route !== "/mail" && route !== "/contact";

  return (
    <div>
      <Nav allPaintingsAndCollections={allPaintingsAndCollections}/>
      <main>{children}</main>
      {showNewsletter && <Newsletter />}
      <Footer />
    </div>
  );
}

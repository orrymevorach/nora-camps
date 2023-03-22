import Nav from '../nav/nav';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}

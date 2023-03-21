import Nav from '../nav/nav';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}

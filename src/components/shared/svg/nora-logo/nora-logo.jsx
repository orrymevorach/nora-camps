import Image from 'next/image';
import ncLogo from 'images/NC.png';

export default function NoraLogo() {
  return (
    <>
      <Image src={ncLogo} alt='main logo' />
    </>
  );
}

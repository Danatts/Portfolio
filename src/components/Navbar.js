import Image from 'next/image';
import styles from '@/styles/Navbar.module.css';
import profilePicture from '../../public/images/profile.jpeg';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__profile}>
        <Image
          alt={"profile picture"}
          className={styles.navbar__picture}
          src={profilePicture}
          height={70}
          width={70}
        />
        <p>Daniel Arteta</p>
      </div>
      <div className={styles.navbar__links}>
        <a href="/">Home</a>
        <a href="projects">Projects</a>
        <a href="about">About</a>
        <a href="about">Contact</a>
      </div>
    </nav>
  );
}

import Image from 'next/image';
import styles from './Navbar.module.css';
import profilePicture from 'public/images/profile.jpeg';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__profile}>
        <Image
          alt={"profile picture"}
          className={styles.navbar__picture}
          src={profilePicture}
          height={60}
          width={60}
        />
        <p>DANIEL ARTETA</p>
      </div>
      <div className={styles.navbar__links}>
        <a href="#home_section">Home</a>
        <a href="#about_section">About</a>
        <a href="#project_section">Projects</a>
        <a href="#contact_section">Contact</a>
      </div>
    </nav>
  );
}

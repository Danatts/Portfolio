import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__links}>
        <a href='#home_section'>Home</a>
        <a href='#about_section'>About</a>
        <a href='#project_section'>Projects</a>
        <a href='#contact_section'>Contact</a>
      </div>
    </nav>
  );
}

import SocialIcon from '@/components/atoms/SocialIcon/SocialIcon';
import githubIcon from 'public/icons/github.svg';
import linkedinIcon from 'public/icons/linkedin.svg';
import gmailIcon from 'public/icons/gmail.svg';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__links}>
        <a href='#home_section'>Home</a>
        <a href='#about_section'>About</a>
        <a href='#project_section'>Projects</a>
        <a href='#contact_section'>Contact</a>
      </div>
      <div className={styles.sidebar__icons}>
        <SocialIcon
          alt={'github icon'}
          href={'https://github.com/Danatts'}
          src={githubIcon}
          size={30}
          />
        <SocialIcon
          alt={'linkedin icon'}
          href={'https://www.linkedin.com/in/danielartetasalazar/'}
          src={linkedinIcon}
          size={30}
          />
        <SocialIcon
          alt={'gmail icon'}
          href={'mailto:danielatts97@gmail.com'}
          src={gmailIcon}
          size={30}
          />
      </div>
    </div>
  )
}

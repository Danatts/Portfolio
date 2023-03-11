import Image from 'next/image';
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
        <a
          className={ styles.sidebar_floating__icon } 
          href={'https://github.com/Danatts'}
          target={'_blank'}
        >
          <Image
            alt={'github icon'}
            className={''}
            src={githubIcon}
            height={30}
            width={30}
            />
        </a>
        <a 
          className={ styles.sidebar_floating__icon }
          href={'https://www.linkedin.com/in/danielartetasalazar/'}
          target={'_blank'}
        >
          <Image
            alt={'linkedin icon'}
            className={''}
            src={linkedinIcon}
            height={30}
            width={30}
            />
        </a>
        <a 
          className={ styles.sidebar_floating__icon }
          href={'mailto:danielatts97@gmail.com'}
          target={'_blank'}
        >
          <Image
            alt={'gmail icon'}
            className={''}
            src={gmailIcon}
            height={30}
            width={30}
            />
        </a>
      </div>
    </div>
  )
}

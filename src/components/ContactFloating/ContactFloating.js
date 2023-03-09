import Image from 'next/image';
import githubIcon from 'public/icons/github.svg';
import linkedinIcon from 'public/icons/linkedin.svg';
import gmailIcon from 'public/icons/gmail.svg';
import styles from './ContactFloating.module.css';

export default function ContactFloating() {
  return (
    <div className={styles.contact_floating}>
      <a
        className={ styles.contact_floating__icon } 
        href={'https://github.com/Danatts'}
        target={'_blank'}
      >
        <Image
          alt={'github icon'}
          className={''}
          src={githubIcon}
          height={35}
          width={35}
          />
      </a>
      <a 
        className={ styles.contact_floating__icon }
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
        className={ styles.contact_floating__icon }
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
  );
}

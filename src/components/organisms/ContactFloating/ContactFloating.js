import SocialIcon from '@/components/atoms/SocialIcon/SocialIcon';
import githubIcon from 'public/icons/github.svg';
import linkedinIcon from 'public/icons/linkedin.svg';
import gmailIcon from 'public/icons/gmail.svg';
import styles from './ContactFloating.module.css';

export default function ContactFloating() {
  return (
    <div className={styles.contact_floating}>
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
  );
}

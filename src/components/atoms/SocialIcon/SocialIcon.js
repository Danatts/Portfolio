import Image from 'next/image';
import styles from './SocialIcon.module.css';

export default function SocialIcon({ href, alt, src, size }) {
  return (
    <a
      className={ styles.social_icon } 
      href={href}
      target={'_blank'}
    >
      <Image
        alt={alt}
        className={''}
        src={src}
        height={size}
        width={size}
        />
    </a>
  );
}

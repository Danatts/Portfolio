import Image from 'next/image';
import profilePicture from 'public/images/profile.jpeg';
import styles from './AboutSection.module.css';

export default function AboutSection({data}) {
  console.log(data)
  return (
    <div className={styles.about_section}>
      <div className={styles.about_section__info}>
        <h1>Hola, mundo</h1>
        <p>{data.description}</p>
      </div>
      <div className={styles.about_section__picture}>
        <Image
          alt={'profile picture'}
          className={styles.about_section__image}
          src={profilePicture}
          height={270}
          />
      </div>
    </div>
  );
}

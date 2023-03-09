import SkillPill from '@/components/SkillPill/SkillPill';
import Image from 'next/image';
import profilePicture from 'public/images/profile.jpeg';
import styles from './AboutSection.module.css';

export default function AboutSection({data}) {
  return (
    <div className={styles.about_section}>
      <div className={styles.about_section__info}>
        <h1>About Me</h1>
        <p>{data.description}</p>
        <h2>Skills</h2>
        <div className={styles.about_section__skills}>
          {data.technologies.map((item, id) => <SkillPill key={id} text={item} />)}
        </div>
        <h2>Languages</h2>
        <div className={styles.about_section__skills}>
          {data.languages.map((item, id) => <SkillPill key={id} text={item.language} />)}
        </div>
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

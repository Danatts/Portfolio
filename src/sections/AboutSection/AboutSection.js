import SkillPill from '@/components/atoms/SkillPill/SkillPill';
import Image from 'next/image';
import profilePicture from 'public/images/profile.jpeg';
import styles from './AboutSection.module.css';

export default function AboutSection({data}) {
  return (
    <div className={styles.about_section}>
      <div className={styles.about_section__info}>
        <h1>ABOUT ME</h1>
        <p>{data?.description}</p>
        <h2>SKILLS</h2>
        <div className={styles.about_section__skills}>
          {data?.technologies?.map((item, id) => <SkillPill key={id} text={item} />)}
        </div>
        <h2>LANGUAGES</h2>
        <div className={styles.about_section__skills}>
          {data?.languages?.map((item, id) => <SkillPill key={id} text={item?.language} />)}
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

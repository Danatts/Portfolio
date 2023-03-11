import styles from './SkillPill.module.css';

export default function SkillPill({text}) {
  return (
    <div className={styles.skill_pill}>
      {text}
    </div>
  );
}

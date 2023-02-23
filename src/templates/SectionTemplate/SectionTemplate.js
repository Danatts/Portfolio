import styles from './SectionTemplate.module.css';

export default function SectionTemplate({ children }) {
  return (
    <div className={styles.section_template}>
      <div className={styles.section_template__content}>{ children }</div>
    </div>
  )
}

import styles from './SectionTemplate.module.css';

export default function SectionTemplate({ id, children }) {
  return (
    <div className= {styles.section_template} id={id}>
      <div className={styles.section_template__content}>
        { children }
      </div>
    </div>
  )
}

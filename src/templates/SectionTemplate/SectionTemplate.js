import styles from './SectionTemplate.module.css';
//import background from 'public/images/bg.webp';

export default function SectionTemplate({ children }) {
  return (
    <div 
      className= {styles.section_template}
      //style={{
      //  backgroundImage: `url(${background.src})`,
      //}} 
      >
      <div className={styles.section_template__content}>
        { children }
      </div>
    </div>
  )
}

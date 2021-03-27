import styles from "../Styles/Section.module.css";
const Section = ({ num, questio, category, difficulty }) => {
  const questionCod = questio
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&eacute;/g, "é");

  return (
    <div className={styles.card}>
      <section className={styles.num}>{num}</section>
      <section>{questionCod}</section>
      <p>{`${category} : ${difficulty}`}</p>
    </div>
  );
};

export default Section;

import React from "react";
import styles from "./Card.module.css";

// const InfoCard = (props) => {
//   return (
//     <div className={styles.card}>
//       <h2>{props.title}</h2>
//       <p>{props.content}</p>
//       <p>Authoro : {props.author}</p>
//     </div>
//   );
// };

const InfoCard = ({ title = "(No Title)", content, author = "Anonymous" }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Authoro : {author}</p>
    </div>
  );
};

export default InfoCard;

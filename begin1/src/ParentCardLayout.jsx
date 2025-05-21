import React from "react";
import styles from "./Card.module.css";
import CardLayout from "./CardLayout";

const ParentCardLayout = () => {
  return (
    <>
      <CardLayout>
        <p>Props of Components</p>
      </CardLayout>
      <CardLayout title={"Detailes"}>
        <ul>
          <li>Feature A</li>
          <li>Feature B</li>
          <li>Feature C</li>
        </ul>
      </CardLayout>
      <CardLayout title={"Contact"}>
        <p>Email : example@example.com</p>
        <p>Phone : 123-456-7890</p>
      </CardLayout>
    </>
  );
};

export default ParentCardLayout;

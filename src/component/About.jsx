/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Staff from "./Staff";

const About = () => {
  const staff = [
    {
      image: "/images/brandon.jpg",
      title: "CEO",
      name: "Brandon Oz",
      id: 1,
    },
    {
      image: "/images/eleanora.jpg",
      title: "Senior Research Associate",
      name: "Eleanora Velvet",
      id: 2,
    },
    {
      image: "/images/tessa.jpg",
      title: "Senior Group Supervisor",
      name: "Tessa Ward",
      id: 3,
    },
    {
      image: "/images/douglass.jpg",
      title: "Legacy Identity Technician",
      name: "Douglass Giffard",
      id: 4,
    },
    {
      image: "/images/tate.jpg",
      title: "Internal Data Specialist",
      name: "Tate Clint",
      id: 5,
    },
    {
      image: "/images/allison.jpg",
      title: "Product Marketing Strategist",
      name: "Allison Dacre",
      id: 6,
    },
  ];
  const styles = {
    about: css`
      width: 700px;
      margin: 0 auto;
      padding: 10px 0;
      margin-top: 50px;
      margin-bottom: 50px;
      & h2 {
        padding-bottom: 10px;
        color: #9ec4dc;
      }
      & p {
        padding-bottom: 10px;
      }
    `,
    staff: css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    `,
  };

  return (
    <div css={styles.about}>
      <h2>How are we</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex blanditiis
        asperiores tenetur aliquid, voluptates perferendis vitae nesciunt
        ratione esse cupiditate recusandae animi quae obcaecati placeat! Unde
        quae vero debitis nesciunt?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex blanditiis
        asperiores tenetur aliquid, voluptates perferendis vitae nesciunt
        ratione esse cupiditate recusandae animi quae obcaecati placeat! Unde
        quae vero debitis nesciunt?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex blanditiis
        asperiores tenetur aliquid, voluptates perferendis vitae nesciunt
        ratione esse cupiditate recusandae animi quae obcaecati placeat! Unde
        quae vero debitis nesciunt?
      </p>
      <div css={styles.staff}>
        {staff.map((staffCard, i) => {
          return (
            <Staff
              image={staffCard.image}
              title={staffCard.title}
              name={staffCard.name}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;

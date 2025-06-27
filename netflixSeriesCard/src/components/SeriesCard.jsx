 import styles from "./Netflix.module.css";
 import styled from "styled-components";
 
 export const Seriescard = (props) => {
  // console.log(props);
  /*const {data} = props (destructring)*/
  const {id, img_url, name, rating, description, genre, cast, watch_url} = props.data;

  // const btn_style = {
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--bg-color)",
  // }
                            // OR
  const ButtonThapa = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    fontSize: 1.6rem;
    background-color: ${(props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--bg-color);
    fontWeight: bold;
    cursor: pointer;
    `;

  const Rating = styled.h3`
    font-size: 1.6rem;
    color: #7dcea0;
    text-transform: capitalize;
  `;

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  return(
          <li className="styles.card" key={props.key}>
            <div>
              <img src={img_url} alt={name} width="40%" height="40%" />
            </div>
            {/* <div className={styles["card-content"]}> */}
            <div className="flex flex-col gap-6 py-6 px-6">
              <h2>Name: {name}</h2>
            <Rating>
              Rating: 
                {/* <span className={`rating ${rating >= 8.5 ? "super_hit" : "average"}`}> */}
                <span className={`${styles.rating} ${ratingClass}`}>
                  {rating}
                </span>
            </Rating>
            <p className="text-3xl font-bold underline">Summary: {description}</p>
            <p>Genre: {genre.join(", ")}</p>
            <p>Cast: {cast.join(", ")}</p>
            <a href={watch_url} target="_blank">
              {/* <button style={btn_style}>Watch Now</button> */}
              <ButtonThapa rating={rating}>Watch Now</ButtonThapa>
            </a>
            </div>
          </li>
        );
};
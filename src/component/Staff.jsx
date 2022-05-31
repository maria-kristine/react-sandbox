/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Staff = ({image, title, name}) => {
    const styles = {
        staff: css`
        padding-top: 20px;
        & img{
            width: 100%;
            margin: 0 auto;
            border-radius: 50%
        }
        & h3{
            font-size: 0.85rem;
            text-align: center;
            color: #9ec4dc;
        }
        & p{
            font-size: 0.80rem;
            text-align: center;
        }
      `,
    }
    return ( 
        <div css={styles.staff}>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{name}</p>
        </div>
     );
}
 
export default Staff;
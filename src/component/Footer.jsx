/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Weather from "./Weather";



const Footer = () => {

    const styles = {
        footer: css`
        background-color: #252734;
        padding: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & h4 {
            color: #fff;
            font-weight: normal;
            font-size: 0.80rem;
        }
        & p {
            color: #fff;
            font-size: 0.80rem;
        }
        `,
    }
    return ( 
        <footer css={styles.footer}>
            <div>
                <h4>Sandbox</h4>
                <p>Copenhagengade 100, 3. sal</p>
                <p>2200 Copenhagen K</p>
                <p>Denmark</p>
            </div>
           <Weather/>
        </footer>
     );
}
 
export default Footer;


/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";



const Footer = () => {

    const styles = {
        footer: css`
        background-color: #252734;
        padding: 35px;
        & p {
            color: #fff;
        }
        `,
    }
    return ( 
        <footer css={styles.footer}>
            <p>weather</p>
        </footer>
     );
}
 
export default Footer;


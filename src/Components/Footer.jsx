import React, { useContext } from "react";
import { GlobalContext } from "./utils/GlobalContext";

const Footer = () => {
  const { state, dispatch } = useContext(GlobalContext);
  return (
    <footer className={`footer ${state.theme}`}>
      <div className="footer-left">
        Powered by
        <img src="./images/DH.png" alt="DH-logo" height="50px" />
      </div>
      <div className="footer-right">
        <img className={`${state.theme}`} src="./images/ico-facebook.png" alt="ico-facebook" width="20px" height="auto" />
        <img className={`${state.theme}`} src="./images/ico-instagram.png" alt="ico-instagram" width="50px" />
        <img className={`${state.theme}`} src="./images/ico-whatsapp.png" alt="ico-whatsapp" width="50px" />
        <img className={`${state.theme}`} src="./images/ico-tiktok.png" alt="ico-tiktok" width="50px" />
      </div>
    </footer>
  );
};

export default Footer;

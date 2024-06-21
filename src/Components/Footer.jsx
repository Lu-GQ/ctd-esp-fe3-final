import React, { useContext } from "react";
import { GlobalContext } from "./utils/GlobalContext";

const Footer = () => {
  const { state, dispatch } = useContext(GlobalContext);
  return (
    <footer className={`footer ${state.theme}`}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer

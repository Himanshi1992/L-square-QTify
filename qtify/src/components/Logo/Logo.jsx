import React from 'react';
// import styles from "./Logo.module.css";
import LogoImg from '../../assets/logo.png';

const Logo = () => {
  return (
    <div>
    <img src={LogoImg} width={67} alt="logo"/>
    </div>
  );
};

export default Logo;
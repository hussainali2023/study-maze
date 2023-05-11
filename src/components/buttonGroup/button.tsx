import React from 'react';
import Styles from '../../styles/Button.module.css';
export const Button = ({ children }: any) => {
    return (
        <button className={Styles.btnGroup}>{children}</button>
    );
};

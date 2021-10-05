import React from 'react';
import styles from "../enter/Enter.module.css";

type ButtonType = {
    type?: 'submit' | 'reset' | 'button'
    disabled?: boolean
    title: string
}

const Button = (props: ButtonType) => {

    return (
        <div>
            <button className={styles.button} type={props.type} disabled={props.disabled}>{props.title}</button>
        </div>
    );
};

export default Button;
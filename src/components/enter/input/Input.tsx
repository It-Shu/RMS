import React from 'react';
import styles from "../Enter.module.css";


type InputTypes = {
    type: string
    title: string
}

const Input = (props: InputTypes) => {
    return (
            <div className={styles.inputForm}>
                <div className={styles.inputTitle}>
                    <label>{props.title}</label>
                </div>
                <div className={styles.inputDiv}>
                    <input className={styles.input} type={props.type}/>
                </div>
            </div>
    );
};

export default Input;
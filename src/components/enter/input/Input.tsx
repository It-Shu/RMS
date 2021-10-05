import React from 'react';
import styles from "../Enter.module.css";
import {useFormik} from "formik";


type InputTypes = {
    type: 'email' | 'password' | 'tel' | 'name' | 'text'
    title: string
    placeholder?: string
}

type FormikErrorsType = {
    email?: string,
    password?: string
    telNumber?: string
    name?: string
}

const Input = (props: InputTypes) => {

    // подключается библиотека formik для настройки валидации формы
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            telNumber: '',
            name: '',
        },
        validate: (values) => {
            const errors: FormikErrorsType = {};
            if (!values.email) {
                errors.email = 'Введите email'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-ZА-Я]{2,4}$/i.test(values.email)) {
                errors.email = 'Требуется ввести адрес электронной почты'
            }
            if (!values.password) {
                errors.password = 'Введите пароль'
            } else if (!/^[A-Z0-9._%+-]{1,50}$/i.test(values.password)) {
                errors.password = "Требуется ввести пароль"
            } else if (values.password.length < 2) {
                errors.password = "Слишком короткий пароль"
            }
            if (!values.telNumber) {
                errors.telNumber = 'Введите номер телефона'
            }  else if (!/^([\\+]?[1-9][\\(]?[0-9]{3}[\\)]?([0-9]{3}[\\-]?[0-9]{2}[-]?[0-9]{2}$))/i.test(values.telNumber)) {
                errors.telNumber = 'Требуется ввести номер телефона'
            }
            if (!values.name) {
                errors.name = 'Требуется ввести ФИО'
            } else if (!/^[a-zA-ZА-Я\s-, ]+$/i.test(values.name)) {
                errors.name = "Введено не корректное значение"
            }
            return errors
        },
        onSubmit: values => {
            // formik.resetForm()
        }
    })

    const getFormikFieldEmail = {...formik.getFieldProps('email')}
    const getFormikFieldPassword = {...formik.getFieldProps('password')}
    const getFormikFieldTelNumber = {...formik.getFieldProps('telNumber')}
    const getFormikFieldName = {...formik.getFieldProps('name')}

    const getFormikField = () => {

        if (props.type === 'email') {
            return getFormikFieldEmail
        } else if (props.type === 'password') {
            return getFormikFieldPassword
        } else if (props.type === 'tel') {
            return getFormikFieldTelNumber
        } else if (props.type === 'name') {
            return getFormikFieldName
        }
    }
    //
    const formicError = () => {
        debugger
        if  (props.type === 'email' && getFormikFieldEmail) {
            return <div style={{color: 'red'}}>{formik.errors.email}</div>
        } else if (props.type === 'password' && getFormikFieldPassword) {
            return <div style={{color: 'red'}}>{formik.errors.password}</div>
        } else if (props.type === 'tel' && getFormikFieldTelNumber) {
            return <div style={{color: 'red'}}>{formik.errors.telNumber}</div>
        } else if (props.type === 'name') {
            return <div style={{color: 'red'}}>{formik.errors.name}</div>
        }
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.inputForm}>
                <div className={styles.inputTitle}>
                    <label>{props.title}</label>
                </div>
                <div className={styles.inputDiv}>
                    <input className={styles.input} placeholder={props.placeholder} type={props.type} {...formik.getFieldProps(getFormikField())}/>
                </div>
            </div>
            {/*{*/}
            {/*    formik.touched.password*/}
            {/*    && props.type === 'password'*/}
            {/*    && <div style={{color: 'red'}}>{formik.errors.password}</div>*/}
            {/*}*/}
            {
                // formik.touched.email
                // && props.type === 'email'
                // && <div style={{color: 'red'}}>{formik.errors.email}</div>
                formik.touched && formicError ()
            }
        </form>
    );
};

export default Input;
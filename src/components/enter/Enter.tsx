import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Enter.module.css'
import googleIcon from '../../icons/google-logo.png'
import facebookIcon from '../../icons/facebook-logo.png'
import appleIcon from '../../icons/apple-logo.png'
import Input from './input/Input';
import Button from "./Button/Button";

type EnterPropsType = {}

const Enter = (props: EnterPropsType) => {
    return (
        //
        // <div className={styles.body}>
        <div>
            <section className={styles.body}>
                <form className={styles.form}>
                    <h1 className={styles.title}>Вход</h1>
                    <Input title={'Email'} type={'email'}/>
                    <div className={styles.passwordHref}>
                        <a className={styles.forgotPass} href={''}>Забыли пароль?</a>
                    </div>
                    <Input title={'Пароль'} type={'password'}/>
                    <Button title={'Войти'} type={'submit'} disabled={true}/>
                    <NavLink to={'/registration'}>
                        <Button title={'Зарегистрироваться'}/>
                    </NavLink>
                    <p className={styles.titleOtherEnters}>Или войдите с помощью других сервисов</p>
                    <div className={styles.otherEnters}>
                        <div className={styles.icons}>
                            <a href='https://www.google.com/'><img className={styles.googleIcon}
                                                                   src={googleIcon}
                                                                   alt="google"/></a>
                        </div>
                        <div className={styles.icons}>
                            <a href='https://www.facebook.com/'><img className={styles.googleIcon}
                                                                     src={facebookIcon}
                                                                     alt="facebook"/></a></div>
                        <div className={styles.icons}>
                            <a href='https://www.apple.com/'><img className={styles.googleIcon}
                                                                  src={appleIcon}
                                                                  alt="apple"/></a>
                        </div>
                    </div>
                </form>
            </section>
            <footer className={styles.footer}>
                <span className={styles.span}>2021 OOO"РМ Солюшн"</span>
                <nav className={styles.nav}>
                    <div className={styles.navFooter}><a href="">Правила пользования</a></div>
                    <div className={styles.navFooter}><a href="">Политика конфиденциальности</a></div>
                    <div className={styles.navFooter}><a href="">Контакты</a></div>
                </nav>
            </footer>
        </div>

        // </NavLink>
    );
};

export default Enter;
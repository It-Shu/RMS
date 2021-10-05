import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from "./Registration.module.css";
import Input from "../input/Input";
import {useDispatch, useSelector} from "react-redux";
import { AppRootStateType } from '../../store/store';

type RegistrationPropsType = {

}

const Registration = (props: RegistrationPropsType) => {


    // function show() {
    //     let p = document.getElementById('pwd');
    //     // p.setAttribute('type', 'text');
    // }
    //
    // function hide() {
    //     let p = document.getElementById('pwd');
    //     // p.setAttribute('type', 'password');
    // }
    //
    // let pwShown = 0;
    //
    // // document.getElementById("eye").addEventListener("click", function () {
    //     if (pwShown === 0) {
    //         pwShown = 1;
    //         show();
    //     } else {
    //         pwShown = 0;
    //         hide();
    //     }
    // // }, false);

    const disabled = useSelector<AppRootStateType>(state => state.disabled)
    const dispatch = useDispatch()

    return (
        <div>

            <section className={styles.body}>
                <form className={styles.form}>
                    {/*<input type="password" placeholder="Password" id="pwd" className="masked" name="password"/>*/}
                    {/*<button type="button" id="eye">*/}
                    {/*    <img src="https://cdn0.iconfinder.com/data/icons/feather/96/eye-16.png" alt="eye"/>*/}
                    {/* </button>*/}

                    <h1 className={styles.title}>Регистрация</h1>
                    <Input title={'Email'} type={'email'} />
                    <Input title={'Номер телефона'} type="tel" placeholder={"+7 (___) ___-__-__"}/>
                    <Input title={'ФИО'} type={'name'}/>
                    <Input title={'Пароль'} type={'password'}/>

                    {/*<div className={styles.check}>*/}
                    <label className={styles.checkLabel}>
                        <input className={styles.checkbox} type="checkbox"/>
                        <span className={styles.customCheckbox}></span>
                        <span className={styles.checkboxText}>Являюсь представителем организации</span>
                    </label>
                    {/*</div>*/}


                    <div className={styles.buttonForm}>
                        <NavLink to={'/data'}>
                            <button className={styles.button} disabled={true}>Зарегистрироваться</button>
                        </NavLink>
                    </div>

                    <div className={styles.buttonForm}>
                        <NavLink to={'/'}>
                            <button className={styles.button}>Войти</button>
                        </NavLink>
                    </div>
                    <div className={styles.policyTitle}>
                        <p>Я принимаю условия<a href="">Пользовательского соглашения</a><br/> и даю совоё согласие "РМ
                            Солюшн"
                            на обработку моей <br/> персональной информации на условиях, определенных <br/><a href="">Политикой
                                конфиденциальности</a>.</p>
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
    );
};

export default Registration;
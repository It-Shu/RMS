import React from 'react';
import {NavLink} from "react-router-dom";
import Es from './Enter.module.css'

type EnterPropsType = {}

const Enter = () => {
    return (
        //

        <form>
            <label>Вход</label>
            <div>
                <div><label>Email</label></div>
                <div><input type="email"/></div>
            </div>
            <div>
                <label>Забыли пароль?</label>
            </div>
            <div>
                <div><label htmlFor="">Пароль</label></div>
                <div><input type="password"/></div>
            </div>
            <div>
                <div>
                    <button disabled={true}>Войти</button>
                </div>
                <div >
                    <NavLink to={'/registration'}>
                        <button className={Es.active}>Зарегистрироваться</button>
                    </NavLink>
                </div>


            </div>
            <p>Или войдите с помощью других сервисов</p>
            <a href=''>G</a>
            <a href=''>F</a>
            <a href=''>A</a>
            <hr/>
            <footer>
                <label>2021 OOO"РМ Солюшн"</label>
                <label>Правила пользования</label>
                <label>Политика конфиденциальности</label>
                <label>Контакты</label>
            </footer>

        </form>
        // </NavLink>
    );
};

export default Enter;
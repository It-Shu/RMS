import React from 'react';
import {NavLink} from 'react-router-dom';
import Rs from "./Registration.module.css";

type RegistrationPropsType = {}

const Registration = () => {


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


    return (
        <form>
            {/*<input type="password" placeholder="Password" id="pwd" className="masked" name="password"/>*/}
            {/*<button type="button" id="eye">*/}
            {/*    <img src="https://cdn0.iconfinder.com/data/icons/feather/96/eye-16.png" alt="eye"/>*/}
            {/* </button>*/}

            <hr/>
            <hr/>
            <label>Регистрация</label>
            <div>
                <div><label>Email</label></div>
                <div><input type="email"/></div>
            </div>
            <div>
                <div><label>Номер телефона</label></div>
                <div><input type="tel"/></div>
            </div>
            <div>
                <div><label>ФИО</label></div>
                <div><input type="text"/></div>
            </div>
            <div>
                <div><label>Пароль</label></div>
                <div><input type="password"/></div>
            </div>
            <div className='check'>
                <input
                    className='checkbox'
                    type="checkbox"
                /><label className='labelCheckbox'>Являюсь представителем организации</label>
            </div>
            <div>
                <div>
                    <NavLink to={'/data'}>
                        <button disabled={false}>Зарегистрироваться</button>
                    </NavLink>
                </div>

                <div>
                    <NavLink to={'/'}>
                        <button className={Rs.active}>Войти</button>
                    </NavLink>
                </div>

                <p>Я принимаю условия<a href="">Пользовательского соглашения</a><br/> и даю совоё согласие "РМ Солюшн"
                    на обработку моей <br/> персональной информации на условиях, определенных <br/><a href="">Политикой
                        конфиденциальности</a>.</p>
            </div>
            <hr/>
            <footer>
                <label>2021 OOO"РМ Солюшн"</label>
                <label>Правила пользования</label>
                <label>Политика конфиденциальности</label>
                <label>Контакты</label>
            </footer>

        </form>
    );
};

export default Registration;
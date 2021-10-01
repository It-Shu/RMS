import React from 'react';

type RegistrationPropsType = {}

const Registration = () => {
    return (
        <form>
            <hr/>
            <hr/>
            <label>РЕГИСТРАЦИЯ</label>
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
                    <button  disabled={true}>Зарегистрироваться</button>
                </div>
                <div>
                    <button>Войти</button>
                </div>
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
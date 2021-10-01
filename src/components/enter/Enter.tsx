import React from 'react';

type EnterPropsType = {}

const Enter = () => {
    return (
        <form>
            <label>ВОЙТИ</label>
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
                <div>
                    <button>Зарегистрироваться</button>
                </div>

            </div>
            <p>Или войдите с помощью других сервисов</p>
            <a href=''>G</a>
            <a href=''>F</a>
            <a href=''>A</a>
            <br/>
            <footer>
                <label>2021 OOO"РМ Солюшн"</label>
                <label>Правила пользования</label>
                <label>Политика конфиденциальности</label>
                <label>Контакты</label>
            </footer>

        </form>
    );
};

export default Enter;
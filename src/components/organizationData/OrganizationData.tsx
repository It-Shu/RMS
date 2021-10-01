import React from 'react';

type OrganizationDataPropsType = {}

const OrganizationData = () => {
    return (
        <form>
            <hr/>
            <hr/>
            <a href="javascript:history.back()">Вернуться назад</a>
            <div>
                <label>Данные организации</label>
            </div>
            <div className='bottom-inputs'>
                <div>
                    <label htmlFor="">ИНН</label>
                </div>
                <div>
                    <input type="text" placeholder='_ _ _ _ _ _ _ _ _ _'/>
                </div>
                <div>
                    <label htmlFor="">БИК</label>
                </div>
                <div>
                    <input type="text" placeholder='_ _ _ _ _ _ _ _ _ '/>
                </div>
                <div>
                    <label htmlFor="">Email организации</label> <a>🛈</a>
                </div>
                <div>
                    <input type="email"/>
                </div>
                <div>
                    <label htmlFor="">Номер телефона организации</label>
                </div>
                <div>
                    <input type="tel"/>
                </div>

            </div>
            <div className='bottom-inputs'>
                <div>
                    <label htmlFor="">Наименование организации</label>
                </div>
                <div>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">ОГРН</label>
                </div>
                <div>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">КПП</label>
                </div>
                <div>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">ОКПО</label>
                </div>
                <div>
                    <input type="text"/>
                </div>
            </div>
            <div>
                <label>Реквизиты банка</label>
            </div>
            <div className='bottom-inputs'>
                <div>
                    <label htmlFor="">Наименование банка</label>
                </div>
                <div>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">Корр.счет</label>
                </div>
                <div>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">Адрес банка</label>
                </div>
                <div>
                    <input type="text"/>
                </div>
            </div>

        </form>
    );
};

export default OrganizationData;
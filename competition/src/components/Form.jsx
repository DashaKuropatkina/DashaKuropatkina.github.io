import React from 'react'

export default function Form() {
    return (
        <div className='form__box'>
            <h2 className='form__title'>Зарегистрируйтесь, чтобы участвовать</h2>
            <form className='form' action="#">
                <input type="text" name='username' placeholder='ФИО ребёнка' />
                <input type="text" name='userdate' placeholder='Дата рождения' />
                <input type="text" name='city' placeholder='Город' />
                <input type="email" placeholder='Email' />
                <input type="password" name='userpass' placeholder='Пароль' />
                <div className='form__agree'>
                    <input className='form__tick' type="checkbox" id='agreement' name='agreement' value="yes" />
                    <label for="agreement"></label>
                    <p className='form__text'>Отправляя данные я соглашаюсь с <span className='form__span'>Условиями конкурса</span> и <span className='form__span'>Политикой обработки данных</span> </p>
                </div>
                <button className='form__button' type='submit'>Участвовать</button>
            </form>
            <img className='form__img' src="./img/planes.svg" alt="img" />
        </div>
    )
}

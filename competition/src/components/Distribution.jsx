import React from 'react'

export default function Distribution() {
    return (
        <div className='distribution'>
            <h2 className='dis__title'>Подпишись на нашу рассылку</h2>
            <h3 className='dis__title-mini'>Обещаем присылать только самое важное и интересное</h3>
            <form className='dis__form' action="#">
                <div className='dis__form-input'>
                    <input className='dis__input' type="email" placeholder='Email' />
                    <div className='form__agree'>
                        <input className='form__tick' type="checkbox" id='agreement' name='agreement' value="yes" />
                        <label for="agreement"></label>
                        <p className='form__text'>Отправляя данные я соглашаюсь с <span className='form__span'>Условиями конкурса</span> и <span className='form__span'>Политикой обработки данных</span> </p>
                    </div>
                </div>
                <button className='dis__form-button' type='submit'>Отправить</button>
            </form>
        </div>
    )
}

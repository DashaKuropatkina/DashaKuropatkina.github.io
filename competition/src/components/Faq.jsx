import React from 'react'

export default function Faq() {
    return (
        <div className='faq'>
            <h2 className='faq__title'>Вопрос/Ответ</h2>
            <div className='faq__box'>
                <div className='faq__item'>
                    <p className='faq__text'>Может ли ребёнок заниматься самостоятельно?</p>
                    <img className='faq__image' src="./img/pin.svg" alt="img" />
                </div>
                <div className='faq__item'>
                    <p className='faq__text'>Как происходит оплата?</p>
                    <img className='faq__image' src="./img/pin.svg" alt="img" />
                </div>
                <div className='faq__item'>
                    <p className='faq__text'>Есть ли гарантии усвоения материала?</p>
                    <img className='faq__image' src="./img/pin.svg" alt="img" />
                </div>
                <div className='faq__item'>
                    <p className='faq__text'>С кем будет общаться мой ребёнок?</p>
                    <img className='faq__image' src="./img/pin.svg" alt="img" />
                </div>
                <div className='faq__item'>
                    <p className='faq__text'>Каковы принципы обучения?</p>
                    <img className='faq__image' src="./img/pin.svg" alt="img" />
                </div>
                <div className='faq__item'>
                    <p className='faq__text'>Сколько раз в неделю можно заниматься?</p>
                    <img className='faq__image' src="./img/pin.svg" alt="img" />
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export default function Plan() {
    return (
        <div className='plan'>
            <h2 className='plan__title'>Пошаговый <span className='plan__title-span'>план</span></h2>
            <div className='plan__steps'>
                <div className='plan__step one'>
                    <img className='plan__step-img' src="./img/step1.svg" alt="img" />
                    <p className='plan__step-text'>Зарегистрируйтесь на конкурс <span className='plan__step-span'>Здесь</span></p>
                </div>
                <div className='plan__step two'>
                    <img className='plan__step-img' src="./img/step2.svg" alt="img" />
                    <p className='plan__step-text'>Выполните все условия конкурса</p>
                </div>
                <div className='plan__step three'>
                    <img className='plan__step-img' src="./img/step3.svg" alt="img" />
                    <p className='plan__step-text'>Загрузите рисунок <span className='plan__step-span'>Здесь</span> или в Личном кабинете</p>
                </div>
                <img className='plan__step-line' src="./img/line.svg" alt="img" />
            </div>
        </div>
    )
}

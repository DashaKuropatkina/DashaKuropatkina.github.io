import React from 'react'

export default function Advantages() {
    return (
        <div className='advantages'>
            <h2 className='adv__title'>Для чего <span className='adv__title-span'>нужно</span> участвовать</h2>
            <div className='adv__item'>
                <div className='adv__column'>
                    <img className='adv__img' src="./img/star.svg" alt="img" />
                    <p className='adv__text'>Шанс занять 1 место — в вашем городе и по всей России</p>
                </div>
                <div className='adv__column'>
                    <img className='adv__img' src="./img/winne.svg" alt="img" />
                    <p className='adv__text'>Развитие самостоятельности + свободное время для родителей</p>
                </div>
                <div className='adv__column'>
                    <img className='adv__img' src="./img/certification.svg" alt="img" />
                    <p className='adv__text'>Персональный диплом в разных номинациях каждому участнику</p>
                </div>
                <div className='adv__column'>
                    <img className='adv__img' src="./img/gift.svg" alt="img" />
                    <p className='adv__text'>Призы и скидки для подписчиков и авторизованных пользователей</p>
                </div>
                <div className='adv__column'>
                    <img className='adv__img' src="./img/email.svg" alt="img" />
                    <p className='adv__text'>Бесплатный диплом на email — через 1 день после конкурса</p>
                </div>
                <div className='adv__column'>
                    <img className='adv__img' src="./img/publishing.svg" alt="img" />
                    <p className='adv__text'>Публикация работ победителей во ВКонтакте. <span className='adv__text-span'>Подписывайтесь!</span></p>
                </div>
            </div>
        </div>
    )
}

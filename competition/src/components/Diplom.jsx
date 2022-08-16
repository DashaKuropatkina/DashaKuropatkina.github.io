import React from 'react'

export default function Diplom() {
    return (
        <div className='diplom'>
            <div className='diplom__left'>
                <h2 className='diplom__title'>Выдаём <span className='diplom__title-span'>дипломы</span> участникам</h2>
                <p className='diplom__text'>Жюри конкурса рассмотрит работы и выделит победителей по городам и возрастным категориям, а также определит другие номинации, подчеркнув уникальную особенность каждого конкретного рисунка — дипломы получат все дети! <br /> <br /> Скачать диплом можно будет в личном кабинете через сутки после окончания конкурса, дополнительно вышлем его на e-mail. <br /> <br /> Со слоном к победам напролом!</p>
            </div>
            <div className='diplom__right'>
                <img className='diplom__img' src="./img/diplom.jpg" alt="img" />
            </div>
        </div>
    )
}

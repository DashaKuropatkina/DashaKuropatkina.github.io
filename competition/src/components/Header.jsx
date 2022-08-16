import React from 'react'

export default function Header() {
    return (
        <header>
            <div className='menu'>
                <div className='menu-logo'>
                    <img className='menu-logo-img' src="./img/logo.jpg" alt="logo" />
                    <h3 className='menu-logo-title'>Слон<span className='menu-logo-span'>УМ</span></h3>
                </div>
                <div className='menu-button'>
                    <button className='menu-btn'>Войти</button>
                </div>
            </div>
            <div className='head'>
                <div className='head__left'>
                    <div className='head__left-text'>
                        <h5 className='head-title-mini'>От компании СлонУМ</h5>
                        <h1 className='head-title'>Всероссийский конкурс Детского рисунка</h1>
                        <p className='head-text'>Участвуйте в конкурсе и получайте призы в различных номинациях детского рисунка для всех возрастов</p>
                    </div>
                    <div className='head__left-btn'>
                        <div className='head-button'>
                            <button className='head-btn'>Участвовать</button>
                        </div>
                        <div className='head-timer'>
                            <div className='head-time'>
                                <p className='head-time-number'>01</p>
                                <p className='head-time-text'>дней</p>
                            </div>
                            <p className='head-time-colon'>:</p>
                            <div className='head-time'>
                                <p className='head-time-number'>09</p>
                                <p className='head-time-text'>часов</p>
                                <p className='head-time-text-mini'>по МСК</p>
                            </div>
                            <p className='head-time-colon'>:</p>
                            <div className='head-time'>
                                <p className='head-time-number'>43</p>
                                <p className='head-time-text'>минут</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='head__right'>
                    <img className='space' src="./img/space.svg" alt="img" />
                    <img className='girl' src="./img/girl.svg" alt="img" />
                    <img className='stars' src="./img/stars.svg" alt="img" />
                    <img className='planet1' src="./img/planet1.svg" alt="img" />
                    <img className='atom' src="./img/atom.svg" alt="img" />
                    <img className='planet2' src="./img/planet2.svg" alt="img" />
                    <img className='palette' src="./img/palette.svg" alt="img" />
                    <img className='division' src="./img/division.svg" alt="img" />
                    <img className='plus' src="./img/plus.svg" alt="img" />
                    <img className='clock' src="./img/clock.svg" alt="img" />
                    <img className='elephant' src="./img/elephant.svg" alt="img" />
                    <img className='sphere' src="./img/sphere.svg" alt="img" />
                    <img className='rocket' src="./img/rocket.svg" alt="img" />
                    <img className='plane' src="./img/plane.svg" alt="img" />
                    <img className='bulb' src="./img/bulb.svg" alt="img" />
                    <img className='planet3' src="./img/planet3.svg" alt="img" />
                    <img className='planes' src="./img/planes.svg" alt="img" />
                </div>
                <div className='head__text'>
                    <p className='head__text-mini'>Компания <span className='head__text-span'>СлонУм</span> – проводит конкурс для детей, в котором могут участвовать ребята <span className='head__text-green'>всех возрастов!</span> Номинации в которых можно победить, есть возможность проявить себя во всех направлениях и даже <span className='head__text-green'>без художественных способностей.</span> </p>
                </div>
            </div>
        </header>
    )
}

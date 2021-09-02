import { Link } from 'react-router-dom';
import cupImg from '../../assets/img/mainPage-cup.png'
import './mainPage.css'

const MainPage = () => {
    return (
        <div className="mainPage">
            <h1>
                UEFA
            </h1>
            <img className="mainPage-cup" src={cupImg} alt="cup" />
            <div className="mainPage-links">
                <Link
                    className="mainPage-link"
                    to="/competitions"
                >
                    Посмотреть все лиги
                </Link>
                <Link
                    className="mainPage-link"
                    to="/teams"
                >
                    Посмотреть все команды
                </Link>
            </div>
            <div className="mainPage-text">

                <p><span>Сою́з европе́йских футбо́льных ассоциáций</span> (англ. <span>Union of European Football Associations</span>, сокращённо <span>UEFA</span>, в русской транслитерации <span>УЕФА</span>) — спортивная организация, управляющая футболом в Европе и некоторых западных регионах Азии. Она объединяет национальные футбольные ассоциации европейских стран и организует все европейские соревнования футбольных клубов и сборных команд, а также распределяет доходы от рекламы и трансляций между клубами и национальными ассоциациями, входящими в её состав.
                </p>

            </div>



        </div>

    )
}
export default MainPage
import styles from '../styles/Home.module.scss'
import Navbar from '../src/components/Navbar.jsx';
import Image from 'next/image';
import Triangle from '../public/images/Triangle.svg';

export default function Home() {
  return (
    <>
      <div className="mobile__home__temporary">
        <div className="mobile__home__group">
        <h3>Strona mobilna czasowo niedostępna</h3>
        <h3>Moja stara strona</h3>
          <div className="checkbutton__container"><button className="check__button">Zobacz</button></div>
        </div>
      </div>
      <div className="home__container">
        <div className="home__welcome">
          <div className="home__myphoto">
              <img src="/images/Profilowe.png" className="myProf__photo"/>
          </div>
          <div className="home__text">
            <h1> Cześć,</h1>
            <h1> jestem Kacper! </h1>
            <div className="home__welcometext">
              <h3>Uwielbiam <span className="text--special">programowanie</span>,</h3>
              <h3>chętnie <span className="text--special">Cię nauczę!</span></h3>
            </div>
            <h2>Zobacz moje <span className="text--special">darmowe kursy</span></h2>
            <div className="checkbutton__container"><button className="check__button">Sprawdź</button></div>
          </div>
        </div>
        <Navbar/>
      </div>
      <div className="home__description">
          <div className="description__group">
            <h2>Strona dalej w budowie</h2>
            <h3>Moja stara strona</h3>
            <div className="checkbutton__container"><button className="check__button">Zobacz</button></div>
          </div>
      </div>
    </>
  )
}

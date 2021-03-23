import React, {useRef, useEffect} from 'react';
import Navbar from '../src/components/Navbar.jsx';
import Head from 'next/head'
import gsap from 'gsap';

export default function Home() {
  const wrapper = useRef(null);

  useEffect( () => {
    console.log(gsap)
    const [ elements ] = wrapper.current.children;
    console.log(elements)
    const myPhoto = elements.querySelector("#myPhoto");
    const myButton = elements.querySelector("#myButton");

    const all = [myPhoto, myButton];
    console.log(myButton)

    gsap.fromTo( myPhoto, { y: '+=100'}, { duration: 1, y: '-=100', autoAlpha: 1});

  }, [])
  return (
    <div ref={wrapper}>
      <Head>
        <title>Cześć, tu Kacper!</title>
      </Head>
      <div className="home__container">
        <div className="home__welcome">
          <div className="home__myphoto">
              <img src="/images/Profilowe.png" className="myProf__photo" id="myPhoto"/>
          </div>
          <div className="home__text">
            <h1> Cześć,</h1>
            <h1> jestem Kacper! </h1>
            <div className="home__welcometext">
              <h3>Uwielbiam <span className="text--special">programowanie</span>,</h3>
              <h3>chętnie <span className="text--special">Cię nauczę!</span></h3>
            </div>
            <h2>Zobacz moje <span className="text--special">darmowe kursy</span></h2>
            <div className="checkbutton__container">
              <a href="https://www.youtube.com/channel/UCLJiABSd-uulY0TNv1wLJaA/videos" target="_blank">
                <button className="check__button" id="myButton">Sprawdź</button>
              </a>
            </div>
          </div>
        </div>
        <Navbar/>
      </div>
      <div className="home__description">
          <div className="description__group">
            <h2>Strona dalej w budowie</h2>
            <h3>Moja stara strona</h3>
            <div className="checkbutton__container">
              <a href="https://sharqi.netlify.app/" target="_blank">
                <button className="check__button">Zobacz</button>
              </a>
            </div>
          </div>
      </div>
    </div>
  )
}

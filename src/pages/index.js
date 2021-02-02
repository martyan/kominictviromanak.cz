import React, { useEffect } from 'react'
import kominik from '../images/kominik.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './global.scss'

const IndexPage = () => {
    useEffect(() => {
        AOS.init({ once: true });
        AOS.refresh();
    }, [])

  return (
    <div>
      <title>Kominictví Filip Romaňák</title>

        <div className="komin">
            <div className="container">
                {/*<ul className="menu">
                    <li>
                        <a href="">Služby</a>
                    </li>
                    <li>
                        <a href="">Ceník</a>
                    </li>
                    <li>
                        <a href="">Kontakt</a>
                    </li>
                    <li>
                        <a href="">O mně</a>
                    </li>
                </ul>*/}
                <div className="romanak">
                    <img src={kominik} alt="Filip Romaňák"/>
                </div>
                <div className="header" data-aos="fade-down">
                    <h1 className="logo k1" data-aos-delay="100">Kominictví Filip Romaňák</h1>
                    <p className="phone" data-aos-delay="500"><a href="tel:+420777048935">+420 777 048 935</a></p>
                </div>
                <div>
                    <p className="desc" data-aos="fade-right"><strong>Kontrola a čištění komínů</strong> dle vyhlášky v <strong>Brně</strong> a&nbsp;<strong>přilehlém&nbsp;okolí</strong></p>
                    <p className="p" data-aos="fade-up"><strong>Kominík s několikaletou praxí</strong> a výučním listem v oboru kominictví</p>
                    <p className="p" data-aos="fade-up">Každý rok jezdím na <strong>školení výrobců komínových vložek</strong> pro&nbsp;zisk <strong>certifikátu osvědčení</strong>.</p>
                    <p className="p" data-aos="fade-up">Přihlížím&nbsp;k&nbsp;normám <strong>ČSN&nbsp;73&nbsp;4201</strong>, <strong>EN&nbsp;1443</strong></p>
                    <p className="p" data-aos="fade-up"><strong>Kominické&nbsp;služby</strong> provádím v&nbsp;<strong>Brně&nbsp;a&nbsp;okolí</strong> (do&nbsp;50&nbsp;km)</p>

                    <h2 className="h" data-aos="fade-right">Ceník</h2>
                    <p className="p" data-aos="fade-up"><strong>450 Kč</strong> - <strong>pouze kontrola</strong> komínu</p>
                    <p className="p" data-aos="fade-up"><strong>550 Kč</strong> - <strong>kontrola</strong> včetně <strong>čištění</strong></p>
                    {/*<p className="p" data-aos="fade-up">390 Kč - letakova akce, jen pro vas pokud obdrzite nas letak na luxusnim kridovem papiru</p>*/}
                    <p className="p" data-aos="fade-up"><strong>Domluvte se</strong> se svými sousedy na stejném termínu <strong>a získejte</strong> kontrolu s čištěním komínu za <strong>slevněnou cenu 390 Kč</strong></p>

                    <h2 className="h" data-aos="fade-right">Kontakt</h2>
                    <p className="contact">
                        <span className="caption" data-aos="fade-down">Telefon:</span>
                        <a className="value" href="tel:+420777048935" data-aos="fade-down">+420 777 048 935</a>
                    </p>
                    <p className="contact">
                        <span className="caption" data-aos="fade-down">E-mail:</span>
                        <a className="value" href="mailto:romanakfilip@gmail.com" data-aos="fade-down">romanakfilip@gmail.com</a>
                    </p>
                    <p className="contact">
                        <span className="caption" data-aos="fade-down">IČO:</span>
                        <span className="value" data-aos="fade-down">08093334</span>
                    </p>
                    <p className="contact">
                        <span className="caption" data-aos="fade-down">Sídlo:</span>
                        <span className="value" data-aos="fade-down">Myslbekova 1167/37,<br /> Brno 615 00</span>
                    </p>
                </div>

                {/*Zákon č. 320/2015 Sb.*/}
                {/*+++++++++++++++++++++*/}
                {/*Vyhlaska c. 34/2016 Sb.*/}
                {/*+++++++++++++++++++++++*/}

                {/*http://mujkominik.com/revize-kominu.php*/}
                {/*https://www.kominictvipraha.cz/*/}
                {/*https://www.kominictvibelina.cz/fotogalerie-kominictvi*/}
            </div>
        </div>
    </div>
  )
}

export default IndexPage

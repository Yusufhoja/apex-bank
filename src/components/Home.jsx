import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link, Links } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Select, Option } from "@material-tailwind/react";
import Rasm from './Rasm';
export default function Home() {
    const[dark, setDark]=useState(false)
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => setIsOn(!isOn)
     const { t, i18n } = useTranslation();
    
    
const container = {
    width: 45,
    height: 30,
    backgroundColor: "var(--hue-3-transparent)",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    padding: 5,
    alignItems:'center',
    backgroundColor:"blue",
    border:"none"
}

const handle = {
    width: 17,
    height: 20,
    backgroundColor: "white",
    borderRadius: "50%",
}
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);

useEffect(() => {
    if(dark === true) {
      document.body.className = 'dark'
    } else {
      document.body.className = 'light'
    }
  }, [dark])
  return (
    <div className='main-section'>
    <div className="main-left">
       <div onClick={() => setDark(!dark)}><button style={{border:"none", background:"none"}} > <img src={ dark ? '../mood2.svg' : '../mode.svg'} alt="" /></button></div>
       <Link to={'/'}><div style={{backgroundColor:"#E5E8EE", marginTop:"30px "}}> <img src="../home.svg" alt="" /></div></Link>
       <Link to={'/user'}><div > <img src="../user.svg" alt="" /></div></Link>
       <hr  style={{ width:"30px"}}/>
       <Link to={'/work'}><div > <img src="../chemodan.svg" alt="" /></div></Link>
       <hr  style={{ width:"30px"}}/>
       <Link to={'/news'}><div > <img src="../feed.svg" alt="" /></div></Link>
       <hr  style={{ width:"30px"}}/>
       <Link to={'/apps'}><div > <img src="../apps.svg" alt="" /></div></Link>
       <hr  style={{ width:"30px"}}/>
       <Link to={'/search'}><div> <img src="../search.svg" alt="" /></div></Link>
       <Link to={'/login'}> <div> <img src="../loginlogo.svg" alt="" /></div></Link>

       
    </div>

    <div className="main">
      <nav  data-aos="fade-right">
        
        <div className="nav-left">
          <img src="../logo.svg" alt="" />
        </div>

        <div className="nav-right">
          <button style={{color:"#095880"}}>
            <img src="../document.svg" alt="" /> {t('getpolicy')}
          </button>

          <button style={{textDecoration:"underline"}}>
            <img src="../Union.svg" alt="" />{t('takaful')}
          </button>

          <select onChange={(e) => i18n.changeLanguage(e.target.value)} className='custom-select' name="" id="" >
             <option disabled selected hidden> 🌐 | RU</option>
            <option value="ru">Русский </option>
            <option value="uz">O'zbek</option>
            <option value="en">English</option>
          </select>
          {/* <button>
            <img style={{width:"25px"}} src={dark ? '../eyewhite.png' : '../eye.svg'} alt="" /> |  RU
          </button> */}

          <button style={{padding:" 8px 12px"}} >
            <img style={{width:"22px"}} src={dark ? '../call.png' : '../call.svg'} alt="" /> <p>1188</p> | <img style={{width:"22px"}} src={dark ? '../send.png' : '../send.svg'} alt="" /> {t('support')}
          </button>
        </div>
      </nav>


      <main>
        {/* <div className="section1">
          <div className="section1-div">
            <p data-aos="fade-down">{t('h1')}</p>
            <h1 data-aos="zoom-in">{t('osgo')}</h1>
            <p data-aos="fade-up">{t('sms')}</p>
            <button className='btn' data-aos="fade-right" style={{fontSize:"18px"}}>{t("title")} <img src="../right.svg" alt="" /></button>
          </div>
            
        </div> */}

<Rasm></Rasm>

        <div className="section2">
          <div className="section2-top">
              <div className="section2-top-left">
                <h2>{t('recomend')}</h2>
                <p>{t('individual')}</p> <button
            className="toggle-container"
            style={{
                ...container,
                justifyContent: "flex-" + (isOn ? "start" : "end"),
            }}
            onClick={toggleSwitch}
        >
            <motion.div
                className="toggle-handle"
                style={handle}
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
            />
        </button>
              </div>

              <div className="seciton2-top-right" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <p className='p' style={{fontSize:"18px", transition:"0.s linear"}}>{t('allproducts')}</p>
              </div>
          </div>



          <div className="section2-button">
            <div data-aos="fade-up" data-aos-delay="100" className="card">
              <div className='perdiv'><div style={{width:"22px"}}><img className='perimg' src="../per.svg" alt="" /></div></div>
              <img src="../img1.jpg " alt="" />
              <div className="card-bottom">
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div className="lleft">
                  <h3>{t('straxovka1')}</h3><br />
              <p className='card_first_p'>{t('sugurta')}</p>
                </div>
                <div className="rright">
                  <img style={{width:"20px", height:"20px"}} src="../kema.svg" alt="" />
                </div>
              </div>
              <p className='card_second_p'>Lorem ipsume dolor sit amet consectetur. Tortor ipsum sed natoque sed elit ut eget vitae.</p>
              <hr/>
              <div className='p_and_button'><p className='card_third_p'>{t('polis')}</p> <button>{t("title")}</button></div>
              </div>
            </div>

             <div data-aos="fade-up" data-aos-delay="200" className="card">
              <div className='perdiv'><div style={{width:"22px"}}><img className='perimg' src="../per.svg" alt="" /></div></div>
              <img src="../img2.png " alt="" />
              <div className="card-bottom">
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div className="lleft">
                  <h3>{t('straxovka2')}</h3><br />
              <p className='card_first_p'>{t('sugurta')}</p>
                </div>
                <div className="rright">
                  <img style={{width:"20px", height:"20px"}} src="../verible.svg" alt="" />
                </div>
              </div>
              <p className='card_second_p'>Lorem ipsum dolor sit amet consectetur. Tortor ipsum sed natoque sed elit ut eget vitae.</p>
              <hr />
              <div className='p_and_button'><p className='card_third_p'>{t('polis')}</p> <button>{t("title")}</button></div>
              </div>
            </div>

             <div data-aos="fade-up" data-aos-delay="300" className="card">
              <div className='perdiv'><div style={{width:"22px"}}><img className='perimg' src="../per.svg" alt="" /></div></div>
              <img src="../img3.jpg " alt="" />
              <div className="card-bottom">
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div className="lleft">
                  <h3>{t('straxovka3')}</h3><br />
              <p className='card_first_p'>{t('sugurta')}</p>
                </div>
                <div className="rright">
                  <img style={{width:"20px", height:"20px"}} src="../kema.svg" alt="" />
                </div>
              </div>
              <p className='card_second_p'>Lorem ipsum dolor sit amet consectetur. Tortor ipsum sed natoque sed elit ut eget vitae.</p>
              <hr />
              <div className='p_and_button'><p className='card_third_p'>{t('polis')}</p> <button>{t("title")}</button></div>
              </div>
            </div>

             <div data-aos="fade-up" data-aos-delay="400" className="card">
              <div className='perdiv'><div style={{width:"22px"}}><img className='perimg' src="../per.svg" alt="" /></div></div>
              <img src="../img1.jpg " alt="" />
              <div className="card-bottom">
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div className="lleft">
                  <h3>{t('straxovka4')}</h3><br />
              <p className='card_first_p'>{t('sugurta')}</p>
                </div>
                <div className="rright">
                  <img style={{width:"20px", height:"20px"}} src="../kema.svg" alt="" />
                </div>
              </div>
              <p className='card_second_p'>Lorem ipsum dolor sit amet consectetur. Tortor ipsum sed natoque sed elit ut eget vitae.</p>
              <hr />
              <div className='p_and_button'><p className='card_third_p'>{t('polis')}</p> <button>{t("title")}</button></div>
              </div>
            </div>
          </div>
        </div>



<div className="section3" data-aos="fade-up">
  <div className="section3-left" data-aos="fade-right">
    <h2 data-aos="fade-down" data-aos-delay="100">{t('about')}</h2>
    <div data-aos="zoom-in" data-aos-delay="200"></div>
  </div>

  <div style={{marginLeft:"20px"}} className="section3-rihgt" data-aos="fade-left">
    <h2 data-aos="fade-down" data-aos-delay="100">{t('prium')}</h2>
    
    <div className='section3-right-maindiv'>
      <div className="section3-right-leftdivs">
        <div style={{borderRadius:"20px"}} className="section3-right-1div" data-aos="flip-left" data-aos-delay="200">
          <p style={{fontSize:"20px"}}>{t('effect')}</p>
          <img style={{marginTop:"70px", marginLeft:"100px"}} src="../number.svg" alt="" />
        </div>

        <div style={{fontSize:"20px"}} className="section3-right-2div" data-aos="flip-left" data-aos-delay="300">
          <p>{t('masuliat')}</p>
        </div>
      </div>

      <div className="section3-right-rightdivs">
        <div data-aos="zoom-in-up" data-aos-delay="400">
          <b>72+</b> <p>{t('strproduct')}</p>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="500">
          <b>52+</b> <p>{t('filial')}</p>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="600">
          <b>uzA++</b> <p>{t('safety')}</p>
        </div>
      </div>
    </div>
  </div>
</div>




      <div className="section4" data-aos="fade-up">
  <div 
    data-aos="fade-down" 
    data-aos-delay="100" 
    style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
    <h3>{t('news')}</h3>
    <p className='p'>{t('allnews')} →</p>
  </div>

  <div className="section4-main">
    {/* Chap taraf */}
    <div className="section4-left" data-aos="fade-right" data-aos-delay="200">
      <p className='section4-1p'>{t('freshnews')}  #1</p>
      <p className='section4-2p'>
        {t('news1')}
      </p>
      <img style={{ marginTop: "20px" }} src="../command.svg" alt="" data-aos="zoom-in" data-aos-delay="300" />
    </div>

    {/* O'ng taraf */}
    <div 
      className="section4-right" 
      style={{ backgroundColor: dark ? '#1f1f1f' : 'white' }} 
      data-aos="fade-left" 
      data-aos-delay="300">
      
      <img src="../apex.svg" alt="" data-aos="zoom-in" data-aos-delay="400" />
      
      <p style={{ marginTop: "20px" }} className='section4-1p' data-aos="fade-up" data-aos-delay="500">
        {t('freshnews')} #2
      </p>

      <p className='section4-2p' data-aos="fade-up" data-aos-delay="600">{t('year')}  </p>

      <p className='section4-3p' data-aos="fade-up" data-aos-delay="700">
        {t('year')}
        <br /><br />
       {t('uzuntext')}
        <br /><br /><br />
        {t('uzuntext2')}
        <br /><br />
       {t('uzuntext3')}
      </p>

      <div 
        className='ddiv' 
        data-aos="fade-up" 
        data-aos-delay="800" 
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <b> – 16pt +</b> 
        <button style={{color: dark ? 'white' : 'black'}}>{t('svernut')}</button>
      </div>
    </div>
  </div>
</div>

      </main>



      <footer 
  data-aos="fade-up" 
  data-aos-duration="1200" 
  data-aos-easing="ease-in-out"
  style={{ borderRadius: "20px", width: "1340px", marginTop: "60px", padding: "42px", marginBottom: "36px", backgroundColor: "#E5E8EE" }}
>
  <div className="footer-top" data-aos="fade-down" data-aos-delay="100" style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
    <div className="footer-top-left" data-aos="fade-right" data-aos-delay="200">
      <img src="../logo.svg" alt="" />
    </div>
    <div className="footer-top-right" data-aos="fade-left" data-aos-delay="200" style={{ width: "270px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div data-aos="zoom-in" data-aos-delay="300"><img src="../facebook.svg" alt="" /></div>
      <div data-aos="zoom-in" data-aos-delay="400"><img src="../instagram.svg" alt="" /></div>
      <div data-aos="zoom-in" data-aos-delay="500"><img src="../link.svg" alt="" /></div>
      <div data-aos="zoom-in" data-aos-delay="600"><img src="../email.svg" alt="" /></div>
    </div>
  </div>

  <div className="footer-middle" data-aos="fade-up" data-aos-delay="300" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", borderBottom: "1px solid gray", marginTop: "25px", paddingBottom: "20px" }}>
    <div className="footer-m-1" data-aos="fade-up" data-aos-delay="400" style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", width: "200px" }}>
      <a href="">{t('individual')}</a>
      <a href="">{t('business')}</a>
      <a href="">{t('about2')}</a>
      <a href="">{t('contact')}</a>
    </div>
    <div className="footer-m-2" data-aos="fade-up" data-aos-delay="500" style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", width: "200px" }}>
      <a href="">{t('sugurta')}</a>
      <a href="">{t('h1')}</a>
      <a href="">{t('imushestvo')}</a>
      <a href="">{t('avtosave')}</a>
    </div>
    <div className="footer-m-3" data-aos="fade-up" data-aos-delay="600" style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", width: "300px" }}>
      <a href="">{t('portal')}</a>
      <a href="">{t('portal2')}</a>
      <a href="">{t('agentstvo')}</a>
    </div>
    <div className="footer-m-4" data-aos="fade-up" data-aos-delay="700" style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", width: "200px" }}>
      <a href="">{t('connection')}</a>
      <a href="">+998 (71) 203 08 08</a>
      <a href="">1188</a>
      <a href="">{t('backconnect')}</a>
    </div>
  </div>

  {/* <hr data-aos="fade-up" data-aos-delay="800" style={{ width: "100%", marginTop: "20px", borderColor: "#cccccc" }} /> */}

  <div className="footer-bottom" data-aos="fade-up" data-aos-delay="900" style={{ paddingTop: "20px" }}>
    <p>{t('uzuntext4')}</p>
  </div>
</footer>

    </div>
    
    </div>
  )
}

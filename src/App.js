import React from "react";
import Carrousel from "./components/Carrousel";
import { Footer } from "./components/Footer";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Dicas from "./components/Dicas";
import imgClient from './img/client.png'
import imgClient2 from './img/b_bk_villa_old.jpg'
import imgClient3 from './img/maxresdefault.jpg'
import imgClient4 from './img/tibia-7-4.jpg'


function App() {

  return (
    <div style={{}}>
      <div style={{ maxWidth: '1120px',border:'solid 1px', margin: '0 auto' }}>
        <Header
          homeLink='http://google.com'
          contactLink='http://google.com'
          galerryLink='http://google.com'
          usLink='http://google.com'
        />
        <Carrousel
          content1='conteudo 1'
          content2='conteudo 2'
          content3='conteudo 3'
          content4='conteudo 4'
          background='red'
          autoPlay={true}

        />
        <Form
          inputHolder1='Ola Mundo!'
          inputHolder2='Hello word!'
          profissao1='Knight'
          profissao2='Paladin'
          profissao3='Sorcerer'
          profissao4='Druid'
        />
        <Dicas
          dicasTitle='Dicas de como iniciar'
          dicasParagraph1='Mussum Ipsum, cacilds vidis litro abertis. 
          Delegadis gente finis, bibendum egestas augue arcu ut est.
          Cevadis im ampola pa arma uma pindureta.Em pé sem cair, deitado sem dormir,'
          dicasParagraph2='per gatis num morreus.Não sou faixa preta cumpadi, sou preto inteiris,
          inteiris.Diuretics paradis num copo é motivis de denguis.Cevadis im ampola pa arma uma 
          pindureta.Paisis, filhis, espiritis santis.'
          dicasParagraph3='Não sou faixa preta cumpadi, sou preto inteiris,
          inteiris.Diuretics paradis num copo é motivis de denguis.Cevadis im ampola pa arma uma 
          pindureta.Paisis, filhis, espiritis santis.'
          dicasParagraph4='Mussum Ipsum, cacilds vidis litro abertis. 
          Delegadis gente finis, bibendum egestas augue arcu ut est.
          Cevadis im ampola pa arma uma pindureta.Em pé sem cair, deitado sem dormir.'
          dicasParagraph5='Não sou faixa preta cumpadi, sou preto inteiris,
          inteiris.Diuretics paradis num copo é motivis de denguis.Cevadis im ampola pa arma uma 
          pindureta.Paisis, filhis, espiritis santis.'
        />
        <Gallery
          img1={imgClient}
          img2={imgClient2}
          img3={imgClient3}
          img4={imgClient4}
        />
        <Footer 
          linkFooter1='http://facebook.com'
          linkFooter2='http://instagram.com'
          linkFooter3='http://linkedin.com'
          linkFooter4='http://github.com'
        />
      </div>
    </div>

  )
}

export default App;

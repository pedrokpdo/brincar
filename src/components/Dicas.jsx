import seguro from '../img/seguro.jpg'
import treino from '../img/treino.gif'
import hunt from '../img/hunt.jpeg'
import quest from '../img/quest.jpg'
import divirtase from '../img/divirtase.jpg'


export default function Dicas({ dicasTitle, dicasParagraph1, dicasParagraph2, dicasParagraph3, dicasParagraph4, dicasParagraph5 }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '50px', flexDirection: 'column' }}>
            <h1>{dicasTitle}</h1>
            <div style={{ width: '800px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2>1 - Esteja seguro</h2>
                    <p>{dicasParagraph1}</p>
                    <img style={{}} src={seguro} alt="" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2>2 - Treine</h2>
                    <p>{dicasParagraph2}</p>
                    <img style={{}} src={treino} alt="" width='500px' height='300px'/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2>3 - Cace Monstros</h2>
                    <p>{dicasParagraph3}</p>
                    <img style={{}} src={hunt} alt="" width='500px' height='300px'/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2>4 - Faça Missoes(quests)</h2>
                    <p>{dicasParagraph4}</p>
                    <img style={{}} src={quest} alt="" width='500px' height='300px'/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2>5 - Divirta-se</h2>
                    <p>{dicasParagraph5}</p>
                    <img style={{}} src={divirtase} alt="" width='500px' height='300px'/>
                </div>
            </div>
        </div>
    )
}
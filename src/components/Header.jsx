

export default function Header({ homeLink, contactLink, galleryLink, usLink }) {
    console.log(homeLink);
    return (
        <div style={{
            background: 'black',
            fontSize: '30px', display: 'flex',
            justifyContent: 'space-around',
            height: '100px',
            alignItems: 'center',
        }}
        >
            <div style={{ marginLeft: '10px' }}>
                <a style={{color:'wheat'}} href="">Logo</a>
            </div>
            <div style={{ display: 'flex', listStyle: 'none', alignItems: 'center', height: '50px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '500px' }}>
                    <a style={{ color: 'wheat' }} href={`${homeLink}`}><li>Home</li></a>
                    <a style={{ color: 'wheat' }} href={`${contactLink}`}><li>Contact</li></a>
                    <a style={{ color: 'wheat' }} href={`${galleryLink}`}><li>Gallery</li></a>
                    <a style={{ color: 'wheat' }} href={`${usLink}`}><li>Sobre Nós</li></a>
                </div>
            </div>
        </div>
    )
}
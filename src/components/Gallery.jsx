

export default function Gallery({img1, img2, img3, img4}) {
    return (
        <>
            
            <div style={{ marginTop: '60px' , marginBottom:'30px'}}>
                <h1 style={{marginLeft:'400px'}}>Galeria de Fotos:</h1>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                    <img src={img1} alt="" width='500px' height='300px' />
                    <img src={img2} alt="" width='500px' height='300px' />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '30px' }}>
                    <img src={img3} alt="" width='500px' height='300px' />
                    <img src={img4} alt="" width='500px' height='300px' />
                </div>
            </div>
        </>

    )
}
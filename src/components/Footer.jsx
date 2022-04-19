import { FacebookOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";

export function Footer({ linkFooter1, linkFooter2, linkFooter3, linkFooter4, }) {
    return (
        <>
        <span style={{marginTop: '50px', marginLeft:'400px'}}><strong>feito com 💘 por Pedro Henrique Telles</strong></span>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                height: '100px',
                border: '1px solid',
                marginTop:'30px',
                alignItems: 'center',
            }}
            >
                <FacebookOutlined style={{ fontSize: '60px', marginLeft:'30px'}} />
                <a href={linkFooter1}>Facebook</a>
                <InstagramOutlined style={{ fontSize: '60px', marginLeft:'30px' }} />
                <a href="">Instagram</a>
                <LinkedinOutlined style={{ fontSize: '60px' , marginLeft:'30px'}} />
                <a href="">Linkedin</a>
                <GithubOutlined style={{ fontSize: '60px', marginLeft:'30px' }} />
                <a href="">Github</a>
            </div>
            <div style={{ height: '30px' }}>

            </div>
        </>
    )
}
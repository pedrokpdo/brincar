import { Avatar, Progress } from 'antd';
import { UserOutlined } from '@ant-design/icons';


export default function CarrouselItem({ namePerson, life, power, agility, level }) {
    return (
        <div style={{ width: 'auto', height: 'auto', background:'wheat', display:'flex', justifyContent:'center'}}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar style={{ marginTop: '30px' }} size={100} icon={<UserOutlined />} />
            </div>
            <div style={{ display: 'flex', flexDirection:'column', alignItems:'center' , marginTop:'30px' }}>
                <h1>Name:  {namePerson}</h1>
                <h1>life:  {life}</h1>
                <h1>Power:  {power}</h1>
                <h1>Agilit:  {agility}</h1>
                <h1>Level:      {<Progress style={{ width: '300px' }} percent={level} />}</h1>
            </div>
        </div>
    )
}
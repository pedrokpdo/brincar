import { notification, Button } from "antd";
import 'antd/dist/antd.css';

export default function Notification({desc}) {
    
    const openNotification = () => {
        notification.open({
          message: 'Notification Title',
          description:
            `${desc}`,
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      };
    return (
        <Button type="primary" onClick={openNotification}>
            Open the notification box
        </Button>
    )
}
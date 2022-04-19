import { Input, Radio } from "antd";
import React from "react";
import { SubmitButton } from "./SubmitButton";

export default function Form({ inputHolder1, inputHolder2, profissao1, profissao2, profissao3, profissao4 }) {
    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ marginTop: '30px' }}>Preencha sua ficha:</h1>
                <Input style={{ marginBottom: '30px', width: '300px' }} addonBefore='Nome' placeholder={inputHolder1} />
                <Input style={{ marginBottom: '30px', width: '300px' }} addonBefore='Sobrenome' placeholder={inputHolder2} />
                <h1>Profissao:</h1>
                <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>{profissao1}</Radio>
                    <Radio value={2}>{profissao2}</Radio>
                    <Radio value={3}>{profissao3}</Radio>
                    <Radio value={4}>{profissao4}</Radio>
                </Radio.Group>
                <SubmitButton />
            </div>

        </>
    )
}
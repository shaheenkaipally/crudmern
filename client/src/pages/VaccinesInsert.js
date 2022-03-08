import React, { useState } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;





    `


    function VaccinesInsert(props) {
        const [site, setSite] = useState('');
        const [cardnumber, setCardnumber] = useState('');
        const [time, setTime] = useState('');
        const [priority, setPriority] = useState('');
        const [cancelled, setCancelled] = useState('');
        const handleChangeInputCardnumber = (event )=> {
            const value = event.target.validity.valid
                ? event.target.value
                : cardnumber
    
            setCardnumber(value);
        }
        const handleAddVaccine = async (event) =>{
            const arrayTime = time.split('/')
            const payload = { site, cardnumber, time: arrayTime, priority, cancelled }
            await api.insertVaccine(payload).then(res => {
                window.alert(`Vaccine inserted successfully`)
                setSite('');
                setCardnumber('');
                setTime('');
                setPriority('');
                setCancelled('');
                window.location.href = `/vaccines/list`;
                
            })


        };

            
        return (
            <Wrapper>
                <Title>Create Vaccine Appoinment</Title>

                <Label>Site: </Label>
                <InputText
                    type="text"
                    value={site}
                    onChange={e => setSite(e.target.value)}
                />

                <Label>Card Number: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10000000"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={cardnumber}
                    onChange={handleChangeInputCardnumber}
                />

                <Label>Time: </Label>
                <InputText
                    type="text"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                />

                <Label>Priority: </Label>
                <InputText
                    type="text"
                    value={priority}
                    onChange={e => setPriority(e.target.value)}
                />

                <Label>Cancelled?: </Label>
                <InputText
                    type="text"
                    value={cancelled}
                    onChange={e => setCancelled(e.target.value)}
                />

                <Button onClick={handleAddVaccine}>Add Vaccine</Button>
                <CancelButton href={'/vaccines/list'}>Cancel</CancelButton>
            </Wrapper>
        );
        }

export default VaccinesInsert

import React, { useState, useEffect } from 'react'
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
function VaccinesUpdate(props) {
    const [id, setId] = useState(props.match.params.id);
    const [site, setSite] = useState('');
    const [cardnumber, setCardnumber] = useState('');
    const [time, setTime] = useState('');
    const [priority, setPriority] = useState('');
    const [cancelled, setCancelled] = useState('');
    useEffect(()=>{
        const fetchData = async () => {
        const vaccine = await api.getVaccineById(id)
        setSite(vaccine.data.data.site);
        setCardnumber(vaccine.data.data.cardnumber);
        setTime(vaccine.data.data.time.join('/'));
        setPriority(vaccine.data.data.priority);
        setCancelled(vaccine.data.data.cancelled);
        };
       fetchData(); 
    },[id]);
    const handleChangeInputCardnumber = (event )=> {
        const value = event.target.validity.valid
            ? event.target.value
            : cardnumber

        setCardnumber(value);
    }
    const handleUpdateVaccine = async (event) =>{
        const arrayTime = time.split('/')
        const payload = { site, cardnumber, time: arrayTime, priority, cancelled }
        await api.updateVaccineById(id, payload).then(res => {
            window.alert(`Vaccine updated successfully`)
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
            <Title>Update Vaccine Appoinment</Title>

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
                max="1000000"
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

            <Button onClick={handleUpdateVaccine}>Update Vaccine Appoinment</Button>
            <CancelButton href={'/vaccines/list'}>Cancel</CancelButton>
        </Wrapper>
    );  
}


export default VaccinesUpdate

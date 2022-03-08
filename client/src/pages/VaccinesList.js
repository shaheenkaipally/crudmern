import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`
function UpdateVaccine(props) {
   const updateUser = (event) => {
        event.preventDefault()
      
        window.location.href = `/vaccines/update/${props.id}`
    }
    return (<Update onClick={updateUser}>Update</Update>);


}

function DeleteVaccine(props) {
const    deleteUser = (event) => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the vaccine ${props.id} permanently?`,
            )
        ) {
            api.deleteVaccineById(props.id)
            window.location.reload()
        }
    }
    return (<Delete onClick={deleteUser}>Delete</Delete>);
}

function VaccinesList(props){
    const [vaccines, setVaccines] = useState([]);
  
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
        

        setLoading(true);

        await api.getAllVaccines().then(result => {
            setVaccines(result.data.data);
            setLoading(false);

        }).catch((error) => {
            console.log('error in fetchData:', error)
          });
        };  
        fetchData();

    },[]);

    const columns = [
        {
            Header: 'ID',
            accessor: '_id',
            filterable: true,
        },
        {
            Header: 'Site',
            accessor: 'site',
            filterable: true,
        },
        {
            Header: 'Cardnumber',
            accessor: 'cardnumber',
            filterable: true,
        },
        {
            Header: 'Time',
            accessor: 'time',
            Cell: props => <span>{props.value.join(' / ')}</span>,
        },
        {
            Header: 'Priority',
            accessor: 'priority',
            filterable: true,
        },
        {
            Header: 'Cancelled',
            accessor: 'cancelled',
            filterable: true,
        },
        {
            Header: '',
            accessor: '',
            Cell: function(props) {
                return (
                    <span>
                        <DeleteVaccine id={props.original._id} />
                    </span>
                )
            },
        },
        {
            Header: '',
            accessor: '',
            Cell: function(props) {
                return (
                    <span>
                        <UpdateVaccine id={props.original._id} />
                    </span>
                )
            },
        },
    ]


    let showTable = true
    if (!vaccines.length) {
        showTable = false
    }

    return (
        <Wrapper>
        {showTable && (
            <ReactTable
                data={vaccines}
                columns={columns}
                loading={isLoading}
                defaultPageSize={10}
                showPageSizeOptions={true}
                minRows={0}
            />
        )}
    </Wrapper>
    )
}


export default VaccinesList

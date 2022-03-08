import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``
function Links(props){
    return (
        <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Vaccines management
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/vaccines/list" className="nav-link">
                                List Vaccines
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/vaccines/create" className="nav-link">
                                Create Vaccines
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
    );
}


export default Links

import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Context } from '../index'
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utilc/consts'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logout = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar style={{justifyContent:"space-between"}} bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <Nav style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={"outline-light"} onClick={() => logout()}>Выйти</Button>
                    </Nav>
                    :
                    <Nav style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar

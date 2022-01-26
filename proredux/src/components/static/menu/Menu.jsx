import React from 'react'
import styled from 'styled-components'
import './menu.css'

const Menu = ({active, setActive, ...props}) => {
    const myLeftStyle = {
    }
    const myRightStyle = {
        display:'flex',
        justifyContent:'end',

    }
    const blurRight={
        right:'30%'
    }
    const blurLeft={
        left:'30%'
    }

    const MenuContent = styled.div`
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 0.4s;

        ${props.variant === "dark" ? 
            `background-color:black;
             color:white;
            a{color: white;}
            ` 
        : props.variant === "light" ? 
            `background-color:white;
             color:black;
            a{color:black;}` 
        : `
            background-color:${props.backgroundColor ? props.backgroundColor : "#D3D3D3"};
             color:${props.color ? props.color : "black"};
            a{color:${props.color ? props.color :"black"};
        `}
    `

    const Nav = styled.nav`
        height: 50px;
        width: 100%;
        position: fixed;
        z-index: 50;
        display: flex;
        align-items: center;

        ${props.variant === "light" ? `
        background-color: white;
        .burger-btn::before, .burger-btn::after, .burger-btn span{
            background-color:black;
        }`
        : props.variant === "dark" ?`
        background-color:black;
        .burger-btn::before, .burger-btn::after, .burger-btn span{
            background-color:white;
        }` :`
        background-color: ${props.backgroundColor ? props.backgroundColor : "#D3D3D3"};
        .burger-btn::before, .burger-btn::after, .burger-btn span{
            background-color:${props.color ? props.color : "black"};
        }
        `
    }
    `

    return (
        <div>
            <Nav> <div className="burger-btn" onClick={() => setActive(!active)}> <span/> </div> </Nav> 
            <div className={active ? "menu active": "menu"}  onClick={()=>setActive(false)} style={props.position==="left" ? myLeftStyle : myRightStyle} >
                <div className="blur" style={props.position==="left" ? blurLeft : blurRight}></div>
                <MenuContent onClick={e=>e.stopPropagation()} style={{}}>
                    <div className="menu__header">{props.header}</div>
                    <ul className="link">
                        {props.items.map(item => 
                            <li key={item.id}>
                                <a href={item.href}>{item.value}</a>
                            </li>    
                        )}
                    </ul>
                </MenuContent>
            </div>
        </div>
    )
}

export default Menu
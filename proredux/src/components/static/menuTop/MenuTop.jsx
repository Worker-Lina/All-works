import React from 'react'
import "./menuTop.css"
import styled from "styled-components"

const MenuTop = ({active, setActive, ...props}) => {
    const Menu = styled.div`
        height: ${props.height ? props.height : "50px"};
        ${props.position === "right" ? `justify-content: end;` : ``}
        ${props.variant === "light" ? 
            `background-color: white;
            .menu__list a{ color:black; }
            @media(max-width:768px){
                .menu__body{
                    background-color: white;
                    opacity: .7;
                }
                .menu__icon span,
                .menu__icon::before,
                .menu__icon::after{
                    background-color:black;
                }
            }
            `
        : props.variant === "dark" ?
            `background-color: black;
            .menu__list a{ color: white; }
            @media(max-width:768px){
                .menu__body{
                    background-color: black;
                    opacity: .7;
                }
                .menu__icon span,
                .menu__icon::before,
                .menu__icon::after{
                    background-color:white;
                }
            }`
        : `background-color: ${props.backgroundColor ? props.backgroundColor : "#D3D3D3"};
            .menu__list a{ color: ${props.color ? props.color : "black"} }
            .menu__ico span,
                .menu__ico::before,
                .menu__ico::after{
                    background-color:${props.color ? props.color : "black"};
                }
            .menu__bod{
                background-color: ${props.backgroundColor ? props.backgroundColor : "#D3D3D3"};
                opacity: .7;
            }
            @media(max-width:768px){
                .menu__body{
                    background-color: ${props.backgroundColor ? props.backgroundColor : "#D3D3D3"};
                    opacity: .7;
                }
                .menu__icon span,
                .menu__icon::before,
                .menu__icon::after{
                    background-color:${props.color ? props.color : "black"};
                }
                .menu__list li{
                    font-size:24px;
                    margin-bottom:30px;
                }
            `
            }
    `

    const selectIco = () => {
        if(props.position && active){
            return "menu__ico _active"
        }
        if(props.position && !active){
            return "menu__ico"
        }
        else if(active){
            return "menu__icon _active"
        }
        else{
            return "menu__icon"
        }
    }

    const selectMenu = () =>{
        if(props.position && active){
            return "menu__bod _active"
        }
        else if(props.position && !active){
            return "menu__bod"
        }
        else if(active){
            return "menu__body _active"
        }else{
            return "menu__body"
        }
    }

    return (
        <Menu className="menuTop">
            <div  className={selectIco()} onClick={()=>setActive(!active)}>
                <span></span>
            </div>
            <nav className={selectMenu()}>
                <ul className="menu__list">
                    {props.items.map(item => 
                    <li key={item.id}><a href={item.href}>{item.value}</a></li>)}
                </ul> 
            </nav>
        </Menu>
    )
}

export default MenuTop

import React, {FC} from 'react'
import styled from 'styled-components'
import './Menu.css'

export interface MyMenuProps{
    active:any;
    setActive:any;
    variant:string;
    backgroundColor:string;
    color:string;
    position:string;
    header:string;
    items:[{id:number, href:string, value:string}];

}

const Menu:FC<MyMenuProps> = ({active, setActive,variant,backgroundColor,color, position,header, items,...props}) => {
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

        ${variant === "dark" ? 
            `background-color:black;
             color:white;
            a{color: white;}
            ` 
        : variant === "light" ? 
            `background-color:white;
             color:black;
            a{color:black;}` 
        : `
            background-color:${backgroundColor ? backgroundColor : "#D3D3D3"};
             color:${color ? color : "black"};
            a{color:${color ? color :"black"};
        `}
    `

    const Nav = styled.nav`
        height: 50px;
        width: 100%;
        position: fixed;
        z-index: 50;
        display: flex;
        align-items: center;

        ${variant === "light" ? `
        background-color: white;
        .burger-btn::before, .burger-btn::after, .burger-btn span{
            background-color:black;
        }`
        : variant === "dark" ?`
        background-color:black;
        .burger-btn::before, .burger-btn::after, .burger-btn span{
            background-color:white;
        }` :`
        background-color: ${backgroundColor ? backgroundColor : "#D3D3D3"};
        .burger-btn::before, .burger-btn::after, .burger-btn span{
            background-color:${color ? color : "black"};
        }
        `
    }
    `

    return (
        <div>
            <Nav> <div className="burger-btn" onClick={() => setActive(!active)}> <span/> </div> </Nav> 
            <div className={active ? "menu active": "menu"}  onClick={()=>setActive(false)} style={position==="left" ? myLeftStyle : myRightStyle} >
                <div className="blur" style={position==="left" ? blurLeft : blurRight}></div>
                <MenuContent onClick={e=>e.stopPropagation()} style={{}}>
                    <div className="menu__header">{header}</div>
                    <ul className="link">
                        {items.map(item => 
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
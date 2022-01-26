import React, { useState } from 'react'
import "../../App.css"

const FilterBar = ({filters}) => {    
    const [visible, setVisible] = useState([])

    const setActiveFilter = (index) =>{
        if(visible.includes(index)){
            setVisible([...visible.filter(item => item!== index)])
        }
        else{
            setVisible([...visible, index])
        }
    }

    return (
        <div className="typeBar">
            {filters.length > 0 ? 
                filters.map((filter, index) =>
                    <div 
                    className={visible.includes(index) ? "typeBar__item tybeBar__active" : "typeBar__item"}
                    key={filter.id} 
                    onClick={() => {filter.func(); setActiveFilter(index)}}
                    >{filter.name}</div>

            )
            :
            <h1>no filter</h1>
            }
        </div>
    )
}

export default FilterBar

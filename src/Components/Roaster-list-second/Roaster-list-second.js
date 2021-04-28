import React from "react";
import './Roaser-list.css'

const RoasterCharSecond = ({data, changeSecondChar}) => {
    const names = data.map((name) => {
            return(
                <li key={name} className='roaster-list-item'><div onClick={() => {changeSecondChar(name)}}>{name}</div></li>
            )
    })

    return(
        <ul className='roaster-list'>{names}</ul>
    )
}

export default RoasterCharSecond;
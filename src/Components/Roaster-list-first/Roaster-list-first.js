import React from "react";
import './Roaser-list.css'

const RoasterCharFirst = ({data, changeFirstChar}) => {
    const names = data.map((name) => {
            return(
                <li key={name} className='roaster-list-item'><div onClick={() => {changeFirstChar(name)}}>{name}</div></li>
            )
    })

    return(
        <ul className='roaster-list'>{names}</ul>
    )
}

export default RoasterCharFirst;
import React from "react";
import './Battles-list.css'


const BattlesList = ({Data}) => {

    const FatalityWinner = (end, winner, name) => {
if (end === true && winner === name) {
    return 'Fatality battles-list-item-unit'
} else if(end === false && winner === name) {
    return 'Winner battles-list-item-unit'
} else if(winner !== name) {
    return 'Looser battles-list-item-unit'
}
    }

    const BattleWindow = () => {
        const window = document.getElementById('BattleWindow');
        window.classList.toggle('nonactive');

    }


const NewListItemBtn = () => {
        return(
            <button id='button' onClick={BattleWindow} className='btn d-flex btn-outline-secondary'>НОВЫЙ БОЙ</button>
        )
}

   const battlesListForming = Data.map((items) => {
            return(
                <li className='battles-list-item'>
                    <div className='battles-list-item-unit'>
                        <div className={FatalityWinner(items.end, items.winner, items.name1)}>{items.name1}<br/>{items.fighter1}</div>
                    </div>
                    <div className='battles-list-item-unit'>
                        <div className={FatalityWinner(items.end, items.winner, items.name2)}>{items.name2}<br/>{items.fighter2}</div>
                    </div>
                </li>
            )
   })

return(
                <div className='battles'>
                    <ul className='d-flex battles-list'>
                        {battlesListForming}
                    </ul>
                    <NewListItemBtn />
                </div>
        )
    }

export default BattlesList;
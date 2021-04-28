import React from "react";
import RoasterCharFirst from "../Roaster-list-first/Roaster-list-first";
import RoasterCharSecond from '../Roaster-list-second/Roaster-list-second';
import './New-Battle-Window.css'

export default class NewBattleWindow extends React.Component{

    state = {
        name1: '',
        name2: "",
        fighter1: "",
        fighter2: "",
        winner: '',
        end: false,
        termFirst: '',
        termSecond: ''
    }

    endChange = () => {
        const end = document.querySelector('.end').checked;
        this.setState({
            end: end
        })
    }


    newEl = () => {
        this.props.newEl(this.state.name1, this.state.name2, this.state.fighter1, this.state.fighter2, this.state.winner, this.state.end)
        this.noBattleWindow();
        this.setState({
            name1: '',
            name2: '',
            fighter1: '',
            fighter2: '',
            winner: '',
            termFirst: '',
            termSecond: ''
        })
    }

    winnerName = () => {
        const name1 = document.querySelector(`.winner-name1`);
        const name2 = document.querySelector(`.winner-name2`);
        this.setState({
            name1: name1.value,
            name2: name2.value})
    }

    noBattleWindow = () => {
        const noWindow = document.getElementById('BattleWindow');
        noWindow.classList.toggle('nonactive');
    }

    onRoasterShow = (roaster, num) => {
        const Roaster = document.querySelector(`.${roaster}`);
        const Name = document.querySelector(`.fighter-name${num}`);
        Name.style.borderBottomLeftRadius = '0';
        Name.style.borderBottomRightRadius = '0';
        Roaster.style.display = 'inline-block';
    }

    onRoasterBlur = (roaster, num) => {
        const Roaster = document.querySelector(`.${roaster}`);
        const Name = document.querySelector(`.fighter-name${num}`);
        Name.style.borderBottomLeftRadius = '.25rem';
        Name.style.borderBottomRightRadius = '.25rem';
        Roaster.style.display = 'none';
    }

    battleNames = () => {
        const fighter1 = document.querySelector('.fighter-name1').value;
        const name1 = document.querySelector('.winner-name1').value;
        const name2 = document.querySelector('.winner-name2').value;
        const fighter2 = document.querySelector('.fighter-name2').value;
        const winner = document.querySelector('.winner-select').value;
        this.setState({
            name1: name1,
            name2: name2,
            fighter1: fighter1,
            fighter2: fighter2,
            winner: winner
        })
    }

    roasterFirstFilter = (e) => {
        const fighter = document.querySelector('.fighter-name1').value;
        const termFirst = e.target.value;
        this.setState({termFirst, fighter1: fighter});
        this.props.onFirstSearchChange(termFirst);
    }

    roasterSecondFilter = (e) => {
        const fighter = document.querySelector('.fighter-name2').value;
        const termSecond = e.target.value;
        this.setState({termSecond, fighter2: fighter});
        this.props.onSecondSearchChange(termSecond);
    }

    changeValueFirst = (name) => {
        this.onRoasterBlur('fighter-roaster_1', 1);
        this.setState({fighter1: name});
    }

    changeValueSecond = (name) => {
        this.onRoasterBlur('fighter-roaster_2', 2);
        this.setState({fighter2: name});
    }

    render() {
        return(
            <div id='BattleWindow' className='new-battle-window nonactive'>
                <div className='fighters'>
                    <div className='fighter fighter1'>FIGHTER 1
                        <input value={this.state.name1} onChange={this.battleNames} placeholder='Имя игрока' type="text" className="input-group-text fighter-text winner-name1" required/>
                        <input onFocus={() => {this.onRoasterShow('fighter-roaster_1', 1)}} value={this.state.fighter1} onChange={this.roasterFirstFilter} placeholder='Имя персонажа' type="text" className="input-group-text fighter-text fighter-name1" required/>
                        <div onBlur={() => {this.onRoasterBlur('fighter-roaster_1', 1)}} className='input-group-text fighter-roaster fighter-roaster_1'>
                            <RoasterCharFirst data={this.props.DataFirst} changeFirstChar={(name) => {this.changeValueFirst(name)}}/>
                        </div>
                    </div>
                    <div className='fighter fighter1'>FIGHTER 2
                        <input value={this.state.name2} onChange={this.battleNames} placeholder='Имя игрока' type="text" className="input-group-text fighter-text winner-name2" required/>
                        <input onFocus={() => {this.onRoasterShow('fighter-roaster_2', 2)}} value={this.state.fighter2} onChange={this.roasterSecondFilter} placeholder='Имя персонажа' type="text" className="input-group-text fighter-text fighter-name2" required/>
                        <div onBlur={() => {this.onRoasterBlur('fighter-roaster_2', 2)}}  className='input-group-text fighter-roaster fighter-roaster_2'>
                            <RoasterCharSecond data={this.props.DataSecond} changeSecondChar={(name) => {this.changeValueSecond(name)}}/>
                        </div>
                    </div>
                </div>
                <div className='fight-end'>WINNER
                    <select onChange={this.battleNames} className="input-group-text fight-end-text winner-select">
                        <option value="name1">{this.state.name1}</option>
                        <option value="name2">{this.state.name2}</option>
                        </select>
                    <div className='fatality-end'>
                    <div className='Select'>
                        <input onClick={this.endChange} onChange={this.battleNames} type="radio" className="input-group-text fight-end-text custom-radio end" name='Fatality' value='True'
                               id='True'/>
                        <label htmlFor='True'>YES</label>
                    </div>
                        <div>WAS THERE<br/>A<br/>FATALITY?</div>
                    <div className='Select'>
                        <input onClick={this.endChange} onChange={this.battleNames} type="radio" className="input-group-text fight-end-text custom-radio end" name='Fatality' value='False'
                               id='False'/>
                        <label htmlFor='False'>NO</label>
                    </div>
                    </div>
                </div>
                <button id='button' onClick={this.newEl} className='btn d-flex btn-outline-success btn-lg'>ADD</button>
                <button id='button' onClick={this.noBattleWindow} className='btn d-flex btn-outline-danger btn-lg cancel'>CANCEL</button>
            </div>
        )
    }
}
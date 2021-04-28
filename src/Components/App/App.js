import React from 'react'
import AppHeader from "../App-header/App-header";
import BattlesList from "../Battles-list/Battles-list";
import NewBattleWindow from "../New-Battle-Window/New-Battle-Window";


export default class App extends React.Component {

    state = {
        battleData: [
            this.createNewBattle('Кирилл',
                'Аня', 'Scorpion',
                'Sindel', 'Кирилл', true),
            this.createNewBattle('Кирилл',
                'Аня', 'Noob Saibot',
                'Kitana', 'Аня', false),
            this.createNewBattle('Кирилл',
                'Аня', 'Sonya Blade',
                'Terminator', 'Аня', false),
            this.createNewBattle('Кирилл',
                'Аня', 'Sub-Zero',
                'Jade', 'Кирилл', true),
            this.createNewBattle('Кирилл',
                'Аня', 'Noob Saibot',
                'Kitana', 'Аня', false)
        ],
        termFirst: '',
        termSecond: '',
        Roaster: [
            "Sub-Zero",
            'Baraka',
            'Geras',
            'Jax',
            'Jade',
            'Jeki Briggs',
            'Johny Cage',
            'DiVora',
            'Kabal',
            'Kano',
            'Kitana',
            'Collector',
            'Kotal Kan',
            'Kun Lao',
            'Cassy Cage',
            'Lu Kan',
            'Noob Saibot',
            'Rainden',
            'Scarlet',
            'Sonya Blade',
            'Frost',
            'Cetrion',
            'Shao Kan',
            'Arron Black',
            'Joker',
            'Night Wolf',
            'Sindel',
            'Spawn',
            'Terminator',
            'Shan Czun',
            'Fujin',
            'Shiva',
            'Robocop',
            'John Rambo',
            'Milina',
            'Rain'
        ]
    }

    newEl = (name1, name2, fighter1, fighter2, winner, end = false) => {
        const newItem = this.createNewBattle(name1, name2, fighter1, fighter2, winner, end);
        this.setState(({battleData}) => {
            const newArr = [...battleData, newItem];
            if(newArr.length < 5){
                return {
                    battleData: newArr
                }
            } else {
                newArr.shift();
                return {
                    battleData: newArr
                }
            }
        })
    }

    createNewBattle(name1, name2, fighter1, fighter2, winner, end) {
        if(winner==='name1') {
            return(
            {
                name1: name1,
                name2: name2,
                fighter1: fighter1,
                fighter2: fighter2,
                winner: name1,
                end: end
            }
        )} else if(winner==='name2') {
            return(
                {
                    name1: name1,
                    name2: name2,
                    fighter1: fighter1,
                    fighter2: fighter2,
                    winner: name2,
                    end: end
                })
        } else {
            return(
                {
                    name1: name1,
                    name2: name2,
                    fighter1: fighter1,
                    fighter2: fighter2,
                    winner: winner,
                    end: end
                })
        }
    }

    onFirstSearchChange = (termFirst) => {
        this.setState({termFirst});
    }
    onSecondSearchChange = (termSecond) => {
        this.setState({termSecond});
    }
    searchSecond(items, term) {
        if(term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    searchFirst(items, term) {
        if(term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    render() {
       const {battleData, Roaster, termFirst, termSecond} = this.state;
       const visibleCharFirst = this.searchFirst(Roaster, termFirst);
       const visibleCharSecond = this.searchSecond(Roaster, termSecond);
        return(
            <div>
                <NewBattleWindow onFirstSearchChange={(termFirst) => {this.onFirstSearchChange(termFirst)}} onSecondSearchChange={(termSecond) => {this.onSecondSearchChange(termSecond)}}
                                 DataFirst={visibleCharFirst} DataSecond={visibleCharSecond} newEl={(name1, name2, fighter1, fighter2, winner, end) => {this.newEl(name1, name2, fighter1, fighter2, winner, end)
                }}/>
                <AppHeader />
                <BattlesList Data={battleData}/>
            </div>
        )}
}
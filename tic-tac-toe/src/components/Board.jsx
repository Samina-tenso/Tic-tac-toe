import React from 'react'
import Squares from './Squares'
import { useState } from 'react'
import { useEffect } from 'react'


function Board() {
    const [player, setPlayer] = useState("X")
    let [clicked, setClicked] = useState([])
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function handleClick(e) {

        let button = e.currentTarget
        console.log(button)
        let hasClass = button.classList.contains("X") || button.classList.contains("O")


        if (hasClass) {
            return
        } else if (player == "X") {
            setPlayer("O")
            button.classList.add("X")
        } else {
            console.log(player)
            setPlayer("X")
            button.classList.add("O")

        }
        setClicked(prevState => [...prevState, button])

    }

    function IWon() {

    }
    function Reset() {
        //remove class from squares and setPlayer = X
        console.log(clicked)
        clicked.forEach(button => button.classList.remove("X", "O"))
        setClicked([])
    }

    return (
        <>
            <div className="status" >Next up: {player}</div>
            <div className="board">
                <Squares array={array} setButton={handleClick} />
            </div>
            <div className="reset">
                <button onClick={Reset}>Reset</button>
            </div>
        </>
    )
}

export default Board
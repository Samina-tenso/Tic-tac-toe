import React from 'react'
import Squares from './Squares'
import { useState } from 'react'
import { useEffect } from 'react'


function Board() {
    const [buttons, setButtons] = useState([])
    const [player, setPlayer] = useState("X")
    const [clicked, setClicked] = useState({})
    const [winner, setWinner] = useState()
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];


    function handleClick(e) {

        let button = e.currentTarget
        let hasClass = button.classList.contains("X") || button.classList.contains("O")


        if (hasClass) {
            return
        } else if (player == "X") {
            setPlayer("O")
            button.classList.add("X")
        } else {
            setPlayer("X")
            button.classList.add("O")

        }
        setButtons(prevState => [...prevState, button])
        setClicked(prevState => ({ ...prevState, [button.id]: player }))
        console.log(buttons)
    }

    useEffect(() => {
        IWon(clicked)

    })

    function IWon(clicked) {

        const winningLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winningLines.length; i++) {
            const [a, b, c] = winningLines[i]
            if (clicked[a] == "X" && clicked[b] == "X" && clicked[c] == "X") {
                setWinner("X")
            } else if (clicked[a] == "O" && clicked[b] == "O" && clicked[c] == "O") {
                setWinner("O")
            }

        }

    }


    function Reset() {
        //remove class from squares and setPlayer = X
        buttons.forEach(button => button.classList.remove("X", "O"))
        setClicked([])
    }

    return (
        <>
            {winner ? (<div className="status" > Winner is: {winner} </div>) : (<div className="status" > Next up: {player} </div>)}

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
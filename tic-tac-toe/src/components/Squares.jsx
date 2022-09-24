import React from 'react'

function Squares(props, { array }) {


    return (
        <>
            {props.array.map((item, i) => {
                return (
                    <button key={i} className="square" onClick={props.setButton}></button>
                )
            })}


        </>
    )
}

export default Squares
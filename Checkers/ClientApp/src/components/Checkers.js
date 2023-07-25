import "./App.css"
import React, { useState, useEffect, Component } from 'react';
import CheckersPiece from "./CheckersPiece";


export default function Checkers() {
    // Number of rows
    const n = 8;

    // Number of columns
    const m = 8;

    // Array which will be used to 
    // display the chessboard
    const [chessBoard, setChessBoard] = useState();
    const [moveCount, setMoveCount] = useState(0)

    const fetchChessBoard = () => {
        fetch('checkers/getboard')
            .then(response => {
                return response.json()
            })
            .then(data => {
                const newArr = [];
                while (data.length) newArr.push(data.splice(0, 8));
                setChessBoard(newArr);
            })

    }

    function handleOnDrag(ev, pieceNumber) {
        console.log(pieceNumber)
        ev.dataTransfer.setChessBoard("pieceNumber", pieceNumber);
    }

    function handleOnDrop(ev) {
        console.log("THISISADROP!!!")
        chessBoard[4][0] = 2;
        chessBoard[0][0] = 1;

        const arr1d = [].concat(...chessBoard);


        const jsonArray = JSON.stringify(arr1d);

        
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: jsonArray,
        };
        console.log(jsonArray);
        console.log(arr1d);
        fetch('checkers/postboard', requestOptions)
            .then(response => {
                fetchChessBoard();
                console.log(response);
            })
            //.then(data => {
            //    console.log(data);
            //});
        console.log(chessBoard)
    }

    function handleDragOver(ev) {
        ev.preventDefault();
        console.log("drag over");
    }

    useEffect(() => {
        fetchChessBoard();
        console.log(chessBoard);
    }, [])

    return (
        <>  
            {moveCount}
            {chessBoard !== undefined && chessBoard.length > 0 &&
                chessBoard.map((row, rIndex) => {
                    return (
                        <div className="row" key={rIndex}>
                            {row.map((_, cIndex) => {
                                return (
                                    <div
                                        onDrop={handleOnDrop}
                                        onDragOver={handleDragOver}
                                        className={`box ${

                                            // If the sum of row index 
                                            // and column index is even 
                                            // then background will be 
                                            // black else white
                                            (rIndex + cIndex) % 2 === 0
                                                ? "black" : "white"
                                            }`}
                                        key={cIndex}
                                    >
                                        {
                                            (chessBoard[rIndex][cIndex] == 2) ? <CheckersPiece draggable onDragStart={(e) => handleOnDrag(e, 2)} pieceNumber={2} /> : <div></div>
                                        }
                                        {
                                            (chessBoard[rIndex][cIndex] == 1) ? <CheckersPiece draggable onDragStart={(e) => handleOnDrag(e, 1)} pieceNumber={1} /> : <div></div>
                                        }
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
        </>
    );
}


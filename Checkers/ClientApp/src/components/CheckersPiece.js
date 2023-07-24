import "./App.css";
import React, { useState, useEffect } from 'react';

export default function CheckersPiece({ pieceNumber }) {

    return (
        <>
            {
                (pieceNumber == 1) ?
                    <div className="cpu-circle">
                    </div> :
                    <div className="user-circle"></div>

            }
        </>
    )
}
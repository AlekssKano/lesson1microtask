import React, {useState} from "react";

export const Hook = () => {
    console.log("Hook rendering");
    let [player1Counter, setPlayer1Couneter] = useState(10);
    let [player2Counter, setPlayer2Couneter] = useState(10);

    return (<div>
            <div>
                <div>Ivan</div>
                <div>{player1Counter}</div>
                <button onClick={() => {
                    setPlayer1Couneter((actual)=>actual + 1);
                }}>+
                </button>
            </div>
            <hr/>
            <div>
                <div>Petr</div>
                <div>{player2Counter}</div>
                <button onClick={() => {
                    setPlayer2Couneter((actual)=>actual + 1)
                }}>+
                </button>
                <hr/>
                <button onClick={() => {
                    setPlayer1Couneter((actual)=>actual - 1)
                    setPlayer2Couneter((actual)=>actual - 1)
                }}>-
                </button>
                <button onClick={() => {
                    setPlayer1Couneter( 10)
                    setPlayer2Couneter(10)
                }}>Reset
                </button>
            </div>
        </div>

    )


}
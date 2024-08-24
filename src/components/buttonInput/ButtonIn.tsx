import React from 'react';
type ButtonPropsType= {
    name: string;
    callBack:()=>void,

}
export const ButtonIn = (props: ButtonPropsType) => {

    let onClickButtonHandler = () => {
props.callBack()
    }
    return (
        <div>
            <button onClick={onClickButtonHandler}>{props.name}</button>
        </div>
    );
};


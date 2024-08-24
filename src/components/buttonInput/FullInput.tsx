import React, {ChangeEvent, useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;
type FullInputProps = {
    callBack :(title:string)=>void
}
export const FullInput = (props: FullInputProps) => {
    let [title, setTitle] = useState('');

    let onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(event.currentTarget.value);
        setTitle(event.currentTarget.value);

    }
    let onClickButtonHandler = () => {
        props.callBack(title)
        setTitle('')
    }
    return (
        <div>
            <div>
                <input value={title} onChange={onChangeInputHandler}/>
                <button onClick={onClickButtonHandler} >+</button>

            </div>
        </div>
    );
};
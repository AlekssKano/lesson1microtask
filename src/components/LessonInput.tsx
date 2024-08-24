import React, {useState} from 'react';
import {FullInput} from "./buttonInput/FullInput";
import button from "./Button";
import {Input} from "./buttonInput/Input";
import {ButtonIn} from "./buttonInput/ButtonIn";


export const LessonInput = () => {
    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('');
    console.log(title);

    const SignBack =(title:string)=>{
        console.log(title);
        let NewMessage={message: title};
        setMessage([ NewMessage, ...message,]);
    }

    const callBackButtonHandler = ()=>{
        SignBack(title)
        setTitle('')
    }
    return (
        <div>
            <Input setTitle={setTitle} title={title}/>
            <ButtonIn name={"+"} callBack={callBackButtonHandler} />
           {/*<FullInput callBack={SignBack}/>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

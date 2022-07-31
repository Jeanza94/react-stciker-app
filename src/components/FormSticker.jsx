import { useEffect, useState } from "react"


export const FormSticker = ({ serie }) => {
    const [inputvalue, setInputValue] = useState("")

    const saveValue = (event) => {
        setInputValue(event.target.value);

    }

    const sendValue = (event) => {
        event.preventDefault();
        serie(inputvalue);


        // setInputValue("");
    }

    console.log(inputvalue);


    return (
        <form>
            <input onChange={saveValue} type="text" placeholder="Search a sticker" value={inputvalue} />
            <button onClick={sendValue}>Search</button>
        </form>
    )
}

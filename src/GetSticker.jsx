import { useState } from "react"
import { FormSticker, StickersList, Welcome, GoodBye } from "./components"


export const GetSticker = () => {
    const [value, setValue] = useState("dragon ball")

    const onValue = (name) => {
        setValue(name);

    }

    return (
        <>
            <Welcome />
            <h1>GetSticker</h1>
            <FormSticker serie={onValue} />
            <StickersList category={value} />
            <GoodBye />
        </>
    )
}

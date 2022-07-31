import { useEffect, useState } from "react"
import { getSticker } from "../helpers/getSticker"


export const StickersList = ({ category }) => {

    const [images, setImages] = useState([])

    const getImages = async () => {
        const newImages = await getSticker(category);
        setImages(newImages);
    }

    useEffect(() => {
        // getSticker().then(resolve => {
        //     setImages(resolve);
        // }
        getImages()
            ;
    });

    return (
        <div className="card">
            {
                images.map(item => {
                    return (
                        <div key={item.id} className="card-item">
                            <p key={item.url}>{item.title}</p>
                            <img src={item.url} alt={item.title} />
                        </div>
                    )
                })
            }
        </div>
    )
}

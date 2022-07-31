export const getSticker = async (category) => {
    const url = `https://api.giphy.com/v1/stickers/search?api_key=ATC44Td2dxuUHMAc5EFvy2EJAZL2ursp&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const stickers = data.map(image => {
        return {
            id: image.id,
            title: image.title,
            url: image.images.fixed_height.url
        }
    })
    return stickers;
}
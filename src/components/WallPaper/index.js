import React, { useState, useEffect } from 'react'
const WallPaper = () => {
    let defaultImg = 'https://infinitypro-img.infinitynewtab.com/findaphoto/bigLink/8619.jpg?imageMogr2/auto-orient/thumbnail/1000x/blur/1x0/quality/75|imageslim'
    let [imgUrl, setImgurl] = useState(defaultImg)
    let size = { width: '948px', height: 'auto' }
    const getImage = () => {
        let url = `https://infinity-api.infinitynewtab.com/random-wallpaper?_=${Date.now()}`
        fetch(url).then(response => response.json()).then((res) => {
            console.log('res', res.data[0].dimensions);
            // let sizex = res.data[0].dimensions?.split('×')[0]
            // let sizey = res.data[0].dimensions?.split('×')[1]
            setImgurl(res.data[0].src.mediumSrc || res.data[0]?.src?.rawSrc)
        })
    }
    useEffect(() => {

        if (imgUrl === defaultImg) {
            getImage()
        }
    }, [imgUrl, defaultImg])
    return (
        <div>
            {!!imgUrl && <img style={{ ...size }} src={imgUrl} alt='' />}
            <div>
                <button onClick={() => {
                    getImage()
                }}>换一张</button>
            </div>
        </div>
    )
}
export default WallPaper
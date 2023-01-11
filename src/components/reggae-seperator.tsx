import React from 'react'
import reggaeTexture from '../images/reggae-texture.jpg'

type Props = {}

const ReggaeSeperator = (props: Props) => {
    return (
        <div className="c-reggae-seperator">
            <img className='c-reggae-seperator__img' src={reggaeTexture} alt="reggae texture" />
            <div className="d-none">
                Image by <a href="https://www.freepik.com/free-vector/reggae-style-background_3290857.htm#query=reggae%20background&position=48&from_view=search&track=sph">Freepik</a>
            </div>
        </div>
    )
}

export default ReggaeSeperator
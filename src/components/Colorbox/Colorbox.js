import React from 'react'
import './Colorbox.css'
const Colorbox = ({color,id}) => {
    return (
        <div id={id} className='cbox' style={{backgroundColor:`${color}`}}>
        </div>
    )
}

export default Colorbox

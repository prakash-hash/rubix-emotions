import React from 'react'
import './Emobox.css'
const Emobox = ({emotion,color,intensity, onPress,direction='column'}) => {
    return (
        <>
            <div className="container" style={{flexDirection:`${direction}`}}>
                <div className="rect" style={{backgroundColor:`${color}`}} 
                onClick={() => intensity?onPress(intensity):onPress(emotion,color)} 
                >
                    <h1 className="emotion" style={{color:'#666666',textAlign:'center'}}>
                        {intensity}
                    </h1>
                </div>
                <div className="emotion" style={{color:`${color==='#FFFFFF'?'#666666':color}`}}>{emotion}</div>
            </div>
        </>
    )
}

export default Emobox


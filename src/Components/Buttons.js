import React from 'react'




function Buttons({clickHandler, name}) {

    return (
      
        <div class="btns">
            <button onClick={clickHandler}>{name}</button>
            </div>
    )
}
export default Buttons

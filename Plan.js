import React from 'react'

 function Plan(props) {
    return (
        <>
            <ul className=' shadow p-2 col-sm-9 li'>{props.value}
       
       <button className=' btn btn-danger my-2 col-sm-2 offset-1' onClick={()=>{props.sendData(props.id)}}>X</button>
       </ul>
        </>
    )
}



export default Plan;
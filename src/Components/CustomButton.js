import React from 'react'
export default function Buttons(vars)
{
    return(
        <button className='bth btn-primary p-2' onClick={vars.myfun}>{vars.heading}</button>
    )
}
import React from 'react'

export default function Spinner(proprs)
{
    return(
        <div className="d-flex justify-content-center my-5">
        <div className="spinner-grow" style={{width: 50, height: 50,color:'#6799cc'}}role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
</div>
    )
}
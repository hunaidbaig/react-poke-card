import React from 'react'

const Card = ({name, url, handleClick}) => {

  return (
    <div className='card-pokemon' onClick={()=>handleClick(name)}>
        <div className='card-body-pokemon'> 
            <div className='card-header-pokemon'>
                <h3>{name}</h3>
            </div>
        </div>
    </div>
  )
}

export default Card
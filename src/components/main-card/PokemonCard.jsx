import React from 'react'

const PokemonCard = ({name, sprites, weight}) => {
  return (
    <div className='container'>
      <div className="card mt-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
              <div className="col-md-4">
              <img src={sprites?.front_default} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
              <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text"><small className="text-muted">Weight: {weight}</small></p>
              </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default PokemonCard;

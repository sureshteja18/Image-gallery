import React from 'react'

function Gallery({data}) {
  return (
    <div className="row">
        {data.map((image)=>{
            return(
                <div className='col-md-3' key={image.id}>
                    <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} height='200' width='250' alt={image.title} />
                </div>
            )
        })}
    </div>
  )
}

export default Gallery
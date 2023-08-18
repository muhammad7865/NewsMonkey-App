import React from 'react'

const NewsItem =(props)=> {
  
  
    let {title,description,imageUrl,url,author,date,source}=props
    return (
        <div className="card my-3">
        <img src={imageUrl} className="card-img-top " style={{height:"175px"}} alt="..."/>
        <div className="card-body">
        <span className=" badge rounded-pill bg-danger" 
        style={{left:"110%",zIndex:"2", overflow:"hidden"}}>{source}</span>

          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className='text-muted'>By {author} on {new Date(date).toGMTString()}</small></p>
          <a href={url} target='_blank' rel="noreferrer" className="btn btn-dark btn-sm">More Info</a>
        </div>
      </div>
    )
  }

export default NewsItem

import React from 'react'

const Newsitem = (props) => {
    let {title, description, imageUrl, newsUrl, author, Date,source} = props
    return (
      <div>
        <div className="card" >
          <div style={{display: 'flex',
          justifyContent: 'flex-end',
        position: 'absolute',
      right: '0'}}>
        <span className='badge rounded-pill bg-danger'>{source}</span>
      </div>
          <img src={!imageUrl?`https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc=`:imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <div className="card-footer text-muted">By {!author?"Unknown":author} On Date {Date}</div>
              <a href={newsUrl}  rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
}

export default Newsitem

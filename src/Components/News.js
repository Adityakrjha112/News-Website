import React, { useEffect,useState } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  const[articles, setArticles] = useState([])
  const[loading, setLoading] = useState(true)
  const[page, setPage] = useState(1)
  const[totalResults, setTotalResults] = useState(0)
  
  

  const updateNews= async()=>{
    props.setProgress(30);
    let url= `https://newsapi.org/v2/top-headlines?category=${props.Category}&country=${props.Country}&apiKey=${props.API}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(50);
    let parasedData = await data.json()
    setArticles(parasedData.articles)
    props.setProgress(70);
    setTotalResults(parasedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(()=>{
    updateNews()
  },[])
  
   const fetchMoreData = async() => {
    
    let url= `https://newsapi.org/v2/top-headlines?category=${props.Category}&country=${props.Country}&apiKey=${props.API}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page+1)
    setLoading(true)
    let data = await fetch(url)
    let parasedData = await data.json()
    setArticles(articles.concat(parasedData.articles))
    setTotalResults(parasedData.totalResults)
    setLoading(false)
  };
    return (
      
      <div className='container my-3'>
        <h1 className='text-center' style={{margin: '35px',    marginTop: '100px'}}>this is {props.Category} for today</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading/>}
        >
          <div className="container">
        <div className="row">
        {articles.map((element)=>{
          return  <div className="col-md-4 my-3" key={element.url}>
        <Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} Date={element.publishedAt?element.publishedAt.slice(0,10):""} source={element.source.name}/> 
        </div>
        })}
        </div> 
        </div>
        </InfiniteScroll>
      </div>
    )
}
export default News

import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const News = (props) => {
    const [Articles, setArticles] = useState([])
    let [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    const [totalArticles, settotalArticles] = useState(0)

    const update = async () => {
        props.setprogress(0);
        let url = (`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=4b073041d8504cbe8ad99abd9fe05ee0&page=${page}&pagesize=${props.pagesize}`);
        setloading(true)
        props.setprogress(50);
        let data = await fetch(url);
        let parsed = await data.json();
        props.setprogress(70);
        setArticles(parsed.articles)
        settotalArticles(parsed.totalResults)
        setloading(false)
        props.setprogress(100);
    }

    useEffect(() => {
        update();
        // eslint-disable-next-line
    }, [])



    const fetchMore = async () => {
        props.setprogress(0);
        let url = (`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=4b073041d8504cbe8ad99abd9fe05ee0&page=${page+1}&pagesize=${props.pagesize}`);
        setpage(page + 1)
        setloading(true)
        props.setprogress(50);
        let data = await fetch(url);
        let parsed = await data.json();

        props.setprogress(70);

        setArticles(Articles.concat(parsed.articles))
        settotalArticles(parsed.totalResults)
        setloading(false)
        props.setprogress(100);


    }
    let word=props.category.slice(1)
    let upper=props.category.charAt(0).toUpperCase()
    let complete=upper.concat(word)
    
    return (
        <>

            <h2 className='text-center ' style={{ margin: "35px 0px", marginTop: "90px" }}>NewsMonkey-Top   {complete}    Headlines </h2>
        
            <InfiniteScroll
                dataLength={Articles.length}
                next={fetchMore}
                hasMore={Articles.length !== totalArticles}
             loader={loading &&<div className="spinner-border text-dark" role="status"></div>}
            >

                <div className="container">
                    <div className="row">

                        {Articles.map((element) => {
                            return <div className="col-md-4" key={element.url ? element.url : ""}>
                                <NewsItem title={element.title ? element.title : "not found"} description={(element.description ? element.description : "not found")}
                                    imageUrl={element.urlToImage ? element.urlToImage : "not found"} url={element.url ? element.url : "not found"} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} /></div>
                        })}

                    </div>
                </div>
            </InfiniteScroll>

        </>

    )
}
News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}
News.defaultProps = {
    country: 'us',
    pagesize: 6,
    category: 'general'
}

export default News;

import React from 'react';
import '../styles/ArticleDetail.scss'
 
export function ArticleDetail({ detail, handleClick }) { 
  const {
    section,
    subsection,
    title,
    abstract,
    url,
    uri,
    byline,
    item_type,
    updated_date,
    created_date,
    published_date,
    material_type_facet,
    kicker,
    des_facet,
    org_facet,
    per_facet,
    geo_facet,
    multimedia,
    short_url,
  } = detail

  const dateString = new Date(published_date)
  return ( 
    <div className='ArticleDetail'>
      <button onClick={() => {
        handleClick({}, section)
      }}>◀️</button>
      <h2 className='section'>{section} {subsection}</h2>
      <p className='title'>{title}</p>
      <p className='byline'>{byline}</p>
      <p className='abstract'>{abstract}
      <a href={url}>More...</a></p>
      <img src={multimedia[1].url} />
      <p className='caption'>{multimedia[1].caption}</p>
      <p className='date'>{dateString.toLocaleDateString("en-US")}</p>
    </div> 
  ); 
} 


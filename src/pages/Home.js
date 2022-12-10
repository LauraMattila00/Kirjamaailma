import React from 'react'
import '../components/pages.css'
import books from '../components/Images/books.jpg'
import shelf from '../components/Images/shelf.jpg'
import reading from '../components/Images/reading.jpg'
import CustomCarousel from '../components/Carousel/carousel'
import Category from '../components/Category'

const images = [books, shelf, reading]

export default function Home({categories}) {
    const categoryItems = categories.map(product => (
        <Category key={product.trnro} categoryName={product.trnimi}/>
    )
        )
    return (
        <>
        <CustomCarousel images={images}/>
        {categoryItems}
        </>
    )

}



/*<div className='container'>
            <div className="row">
                <div className="col-xl-12"></div>*/
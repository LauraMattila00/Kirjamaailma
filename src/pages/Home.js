import React from 'react'
import '../components/pages.css'
import books from '../components/books.jpg'
import glass from '../components/glass.jpg'
import shelf from '../components/shelf.jpg'
import reading from '../components/reading.jpg'
import maol from '../components/maol.jpg'
import alias from '../components/alias.jpg'
import auroranS from '../components/auroranS.jpg'
import CustomCarousel from '../components/carousel'
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
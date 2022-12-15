import React from 'react'
import '../components/pages.css'
import books from '../components/Images/books.jpg'
import shelf from '../components/Images/shelf.jpg'
import reading from '../components/Images/reading.jpg'
import CustomCarousel from '../components/Carousel/carousel'
import Category from '../components/Category'
import {GiBookCover, GiMaterialsScience} from 'react-icons/gi'
import {MdChildCare, MdOutlineSchool} from 'react-icons/md'
import {FaChessKnight} from 'react-icons/fa'
import '../components/category.css'

const images = [books, shelf, reading]
const icons = [<GiBookCover size={70} />, <MdChildCare size={70}/>, <MdOutlineSchool size={70}/>, <FaChessKnight size={70}/>, <GiMaterialsScience size={70}/>]

export default function Home({categories}) {
    const categoryItems = categories.map((product, index) => (
            <Category icon={icons[index]} key={product.trnro} categoryName={product.trnimi} trnro={product.trnro}/>
    )
        )
    return (
        <>
        <CustomCarousel images={images}/>
        <div class="myCategory">
        {categoryItems}
        </div>
        </>
    )

}



/*<div className='container'>
            <div className="row">
                <div className="col-xl-12"></div>*/
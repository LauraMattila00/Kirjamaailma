
import { Carousel } from 'react-bootstrap';
import "./carousel.css" 

const CustomCarousel = (props) => {
    const {images}=props
    const caption = <Carousel.Caption>
    <h5>Joulu lähestyy!</h5>
    <p>Hanki nyt joulun toivotuimmat kirjalahjat pukinkonttiin.</p>
  </Carousel.Caption>
    const carouselItems = images.map(image =>(
        <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={image}
        />
        {caption}
      </Carousel.Item>
    ))
    return <Carousel className="carousel position-relative">
        {carouselItems}
    </Carousel>
}

export default CustomCarousel;
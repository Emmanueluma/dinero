import './create.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../../asset/item1.jpg'
import img2 from '../../asset/item2.jpg'
import img3 from '../../asset/item3.jpg'
import img4 from '../../asset/item4.jpg'
import img5 from '../../asset/item5.jpg'
import img6 from '../../asset/item6.jpg'
import img7 from '../../asset/item7.jpg'
import img8 from '../../asset/item8.jpg'
import img9 from '../../asset/item9.jpg'
import img10 from '../../asset/item10.jpg'
import img11 from '../../asset/item11.jpg'
import img12 from '../../asset/item12.jpg'
import img13 from '../../asset/item13.jpg'
import img14 from '../../asset/item14.jpg'
import img15 from '../../asset/item15.jpg'
import img16 from '../../asset/item16.jpg'
import img17 from '../../asset/item17.jpg'
import img18 from '../../asset/item18.jpg'
import img19 from '../../asset/item19.jpg'
import img20 from '../../asset/item20.jpg'
import img21 from '../../asset/item21.jpg'
import img22 from '../../asset/item22.jpg'
import img23 from '../../asset/item23.jpg'

const Create = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 1000, // Set the duration between slides (in milliseconds)
        dots: true, // Show navigation dots
        infinite: true, // Loop through images
        speed: 500, // Transition speed (in milliseconds)
        slidesToShow: 2, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
    };

    const data = [
        {
            id: 1,
            img: img1
        },
        {
            id: 2,
            img: img2
        },
        {
            id: 3,
            img: img3
        },
        {
            id: 4,
            img: img4
        },
        {
            id: 5,
            img: img5
        },
        {
            id: 6,
            img: img6
        },
        {
            id: 7,
            img: img7
        },
        {
            id: 8,
            img: img8
        },
        {
            id: 9,
            img: img9
        },
        {
            id: 10,
            img: img10
        },
        {
            id: 11,
            img: img11
        },
        {
            id: 12,
            img: img12
        },
        {
            id: 13,
            img: img13
        },
        {
            id: 14,
            img: img14
        },
        {
            id: 15,
            img: img15
        },
        {
            id: 16,
            img: img16
        },
        {
            id: 17,
            img: img17
        },
        {
            id: 18,
            img: img18
        },
        {
            id: 19,
            img: img19
        },
        {
            id: 20,
            img: img20
        },
        {
            id: 21,
            img: img21
        },
        {
            id: 22,
            img: img22
        },
        {
            id: 23,
            img: img23
        },
    ]
  return (
    <section className="maxWidth create" id="create">
        <h1 className='header-h1'>collaborations</h1>
        {/* <div className="flex-continer">
                {
                    data.map(item => {
                        return(
                            <article key={item.id}>
                                <img  src={item.img} alt={item.id} />
                            </article>
                        )
                    })
                }
        </div> */}
        <Slider className="flex-continer" {...settings}>
            {data.map(item => {
                return(
                    <article key={item.id}>
                        <img  src={item.img} alt={item.id} />
                    </article>
                )
            })}
      </Slider>
    </section>
  )
}

export default Create

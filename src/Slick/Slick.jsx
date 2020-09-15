import React from "react";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function SlickCarousel() {

    const Mansions = [
        {
           Name : 'Mansion 1',
           image : 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
        },
        {
           Name : 'Mansion 2',
           image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYsATFUNvL4jSEak8c8ezrUwRYUz8vcOa2mg&usqp=CAU' 
        },
        {
           Name : 'Mansion 3',
           image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSZaLzjR-s9b4oRjQ2ZRKN8xCS4_2bZ1dztw&usqp=CAU' 
        },
        {
           Name : 'Mansion 4',
           image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkFilhB4MY_dRMZquT5qAkZ5p3aaJPzCHz0A&usqp=CAU' 
        },
        {
           Name : 'Mansion 5',
           image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnlgBXyVTJu4BJQVS5B0WCmzhk2SAredVnLw&usqp=CAU' 
        },
        {
           Name : 'Mansion 6',
           image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz24uHbL9GjvMspj8EdFdA9rIvGLEWrPjTGA&usqp=CAU' 
        },
    ]

    const settings = {
        // dots : true,
        fade : true,
        // infinte : true,
        speed : 500,
        slidesToShow : 1,
        arrows : true,
        slidesToScroll : 1, 
        className : "slides"

    }
    return (
        <div className='App'>
            <Slider {...settings}>
              {
                  Mansions.map( house => {
                      return (
                          <div key={house.Name}>
                              <img width='100%' height='500' src={house.image} alt={house.Name}/>
                              <p>Learning Carousel</p>
                          </div>
                      )
                  })
              }  

            </Slider>

            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aperiam fuga numquam sit officiis voluptate repudiandae, laudantium velit magnam suscipit dolores veniam soluta quam minus quae neque animi et itaque.</h2>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aperiam fuga numquam sit officiis voluptate repudiandae, laudantium velit magnam suscipit dolores veniam soluta quam minus quae neque animi et itaque.</h2>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aperiam fuga numquam sit officiis voluptate repudiandae, laudantium velit magnam suscipit dolores veniam soluta quam minus quae neque animi et itaque.</h2>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aperiam fuga numquam sit officiis voluptate repudiandae, laudantium velit magnam suscipit dolores veniam soluta quam minus quae neque animi et itaque.</h2>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aperiam fuga numquam sit officiis voluptate repudiandae, laudantium velit magnam suscipit dolores veniam soluta quam minus quae neque animi et itaque.</h2>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aperiam fuga numquam sit officiis voluptate repudiandae, laudantium velit magnam suscipit dolores veniam soluta quam minus quae neque animi et itaque.</h2>
        </div>
    )
}
  
export default SlickCarousel

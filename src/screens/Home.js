import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import img1 from '../images/food1.png'


export default function Home() {


  const [search, setsearch] = useState('');
  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    console.log(response[0]);

    setfoodCat(response[1])
    setfoodItem(response[0])

  }

  useEffect(() => {
    loadData()
  }, [])





  return (
    <div className='bg-white'>

      <div> <Navbar /></div>
      <div className="row">
        <div className='container mt-3 border rounded-5 col-sm-12 col-md-12 col-lg-10 col-xl-8'>
          <div id="carouselExampleFade" className="carousel slide carousel-fade mx-auto" data-bs-ride="carousel" style={{height:"600px"}}>
            <div className="carousel-inner" id="carousel">
              <div className="carousel-caption" style={{ zIndex: "2" }}>
                <div className="d-flex">
                  <input type="search" className="form-control me-2" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setsearch(e.target.value) }} />
                  {/* <button className="btn btn-outline-success" type='submit'>Search</button> */}
                </div>
              </div>
              <div className="carousel-item">
                <img src={img1} className=" d-block mx-auto rounded" style={{ height: "100%", width: "100%" }} alt="..." />
              </div>
              <div className="carousel-item active">
                <img src="https://source.unsplash.com/random/1080X600/?pizza" className="d-block mx-auto rounded" alt="..." style={{ height: "100%", width: "100%" }} />
              </div>
              <div className="carousel-item">
                <img src="https://source.unsplash.com/random/1080X600/?frenchfries" className="d-block mx-auto rounded" alt="..." style={{ height: "100%", width: "100%" }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>

      </div>

      <div className='pt-5'>

        <div className='container' >
          {
            foodCat !== []
              ? foodCat.map((data) => {
                return (
                  <div className='row m-3'>
                    <div key={data._id} className='fs-3'>
                      {data.CategoryName}
                    </div>
                    <hr />
                    {
                      foodItem !== []
                        ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                          .map(filterItems => {
                            return (
                              <div key={filterItems._id} className='col-12 col-md-6 col-lg-4 mb-5'>
                                <Card
                                  foodName={filterItems.name}
                                  foodImg={filterItems.img}
                                  foodOptions={filterItems.options[0]}
                                />
                              </div>
                            )
                          }) : "No data found"
                    }
                  </div>
                )
              }) : ""
          }
        </div>
      </div>
      <div><Footer /></div>
    </div>
  )
}

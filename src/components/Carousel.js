import React from 'react'


export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade   " data-bs-ride="carousel">
                <div className="carousel-inner" id = "carousel">
                    <div className="carousel-caption" style={{zIndex:"10"}}>
                        <form className="d-flex">
                            <input type="search" className="form-control me-2" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type='submit'>Search</button>
                        </form>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900X600/?burger" className=" d-block mx-auto" style={{height: "600px"}} alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900X600/?pizza" className="d-block mx-auto" alt="..." style={{height: "600px"}} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900X600/?frenchfries" className="d-block mx-auto" alt="..." style={{height: "600px"}} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-success" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-success" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

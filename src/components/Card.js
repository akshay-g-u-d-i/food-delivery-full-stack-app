import React from 'react'

export default function Card(props) {

    let options = props.foodOptions;
    let priceOptions = Object.keys(options);
    let image = props.foodImg;

    return (
        <div className="card mt-3 shadow-lg p-2 " style={{ "width": "18rem", "height": "350px" }}>
            <img src={image} className="card-img-top" height={"180rem"} style={{ objectFit: "fill" }} alt="..." />
            <div className="card-body ">
                <h5 className="card-title ">{props.foodName}</h5>

                <div>
                    <select className="mt-2 h-100 w-30 bg-dark rounded text-white">
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1} className='text-white'> {i + 1} </option>
                            )
                        })}
                    </select>

                    <select className="mt-2 ms-3 h-100 w-45 bg-dark rounded text-white">
                        {
                            priceOptions.map((data) => {
                                return <option key={data} value={data}> {data} </option>;
                            })
                        }
                    </select>
                    <div className="d-flex">
                        <div className='mt-3 me-auto p-1 ps-2 pe-2 pt-2 shadow-lg rounded'><h6>Total price: Rs. 0</h6></div>
                        <div className=' mt-3 pe-3 ps-2 pt-2 text-white bg-success shadow-lg rounded'><h6>+Cart</h6></div>
                    </div>

                </div>

            </div>
        </div>
    )
}

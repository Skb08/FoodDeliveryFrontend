import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { BASE_URL } from './Url';

export default function () {

    const [search, setSearch] = useState('')
    const [foodCat, setFoodcat] = useState([])
    const [foodItem, setFoodItem] = useState([])

    const loadData = async () => {
        // let response = await fetch(`http://localhost:5000/api/foodData`, {
        let response = await fetch(`${BASE_URL}/api/foodData`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        // console.log(response[0],response[1]);
        setFoodItem(response[0]);
        setFoodcat(response[1]);
    }

    useEffect(() => {
        loadData();
    }, [])


    return (
        <div>
            <div><Navbar /></div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{marginTop:"4rem", objectFit: 'fill !important' }}>
                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption' style={{ zIndex: '10' }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                        </div>
                    </div>
                    <div className="carousel-item active" style={{objectFit: 'cover !important',innerHeight:"45rem" }}>
                        <img src="https://source.unsplash.com/random/500x900/?pizza" className="d-block w-100 " style={{ filter: 'brightness(30%)'}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?pasta" className="d-block w-100" style={{ filter: 'brightness(30%' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{ filter: 'brightness(30%' }} alt="..." />
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
            <div className='container p-4'>
                {
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (
                                <div className='row mb-3'>
                                    <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
                                    <hr />
                                    {foodItem !== []
                                        ? foodItem.filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                                            .map(filterItems => {
                                                return (
                                                    <div key={filterItems._id} className='d-flex justify-content-center col-12 col-md-6 col-lg-4'>
                                                        <Card foodItem ={filterItems}
                                                            options = {filterItems.options}
                                                        ></Card>
                                                    </div>
                                                )
                                            })
                                        : <div>No Such Data Found</div>}
                                </div>
                            )
                        }) : ""
                }

            </div>
            <div><Footer /></div>
        </div>
    )
}

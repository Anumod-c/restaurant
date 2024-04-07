import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



const Body = () => {
    let [listOfRetaurant, setListOfRestaurant] = useState([]);
    let [searchText, setSearchText] = useState("")
    const [filteredrestaurant,setFilteredrestarant]=useState([])

    useEffect(() => {
        fetchData();
    }, [])
const fetchData= async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9635207&lng=77.5821062&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredrestarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

    return listOfRetaurant.length===0?<Shimmer/>: (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className="search-btn" onClick={() => {

                        const filteredRestaurent = listOfRetaurant.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())

                        );
                        setFilteredrestarant(filteredRestaurent);
                    }}>Search Button</button>
                </div>
                <button className="filter-btn" onClick={() => {


                    const filteredList = listOfRetaurant.filter((res) => res.info.avgRating > 4);
                    setFilteredrestarant(filteredList)


                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">

                {filteredrestaurant.map((restaurant, index) => (<RestaurantCard key={index} resData={restaurant} />))}

            </div>
        </div>
    )
}
export default Body;
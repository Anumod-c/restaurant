import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import resObj from "../utils/mockData";


const Body = () => {

    let [listOfRetaurant, setListOfRestaurant] = useState([]);
    let [searchText, setSearchText] = useState("")

    useEffect(() => {
        setListOfRestaurant(resObj)
    }, [])


    return listOfRetaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className="search-btn" onClick={() => {

                        console.log(searchText);
                        const filteredRestaurent = resObj.filter((res) =>
                            res.resName.toLowerCase().includes(searchText.toLowerCase())

                        );
                        setListOfRestaurant(filteredRestaurent);
                    }}>Search Button</button>
                </div>
                <button className="filter-btn" onClick={() => {


                    const filteredList = resObj.filter((res) => res.rating > 4);
                    setListOfRestaurant(filteredList)


                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">

                {listOfRetaurant.map((restaurant, index) => (<RestaurantCard key={index} resData={restaurant} />))}

            </div>
        </div>
    )
}
export default Body;
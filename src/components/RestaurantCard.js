
const RestaurantCard=(props)=>{
    const {resData}=props
    const {url,resName,cusine,rating,delTime}=resData
    return(
        <div className="res-card">
            <img className="res-logo" src={url} alt="food" />
            <h3>{resName}</h3>
            <h4>{cusine}</h4>
            <h4>{rating}</h4>
            <h4>{delTime}</h4>
            
        </div>
    )
}

export default RestaurantCard;
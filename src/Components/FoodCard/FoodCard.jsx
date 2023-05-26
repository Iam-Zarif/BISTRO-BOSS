/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const FoodCard = ({item}) => {
     const { price, category, image, recipe, name } = item;
    return (
      <div className="mt-20 mx-auto">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <p className="absolute right-0 border p-2 rounded-lg">{price}</p>
          <div className="card-body ">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 mt-5">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const MenuItem = ({ item }) => {
  const { price, category, image, recipe, name } = item;
  console.log(image)
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <p className="absolute top-1 right-5 border p-1 rounded bg-white text-black">${price}</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 mt-5">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

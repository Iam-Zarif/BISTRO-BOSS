/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const MenuItem = ({ item }) => {
  const { price, category, image, recipe, name } = item;
  console.log(image)
  return (
    <div className="">
      <div className="flex items-center gap-5">
        <div>
          <img  src={image} alt="" className="w-1/2 rounded-full" />
        </div>
        <div>
          <p>{name}</p>
          <p>{recipe}</p>
        </div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default MenuItem;

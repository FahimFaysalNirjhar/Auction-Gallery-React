import React from "react";
import Item from "../Item/Item";

const ItemContainer = ({ data }) => {
  return (
    <div className="max-w-11/12 mx-auto flex flex-col lg:flex-row justify-center py-28 gap-6">
      {/* items */}
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 max-w-5xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Items</th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((item) => (
              <Item key={item.id} item={item}></Item>
            ))}
          </tbody>
        </table>
      </div>
      {/* cart */}
      <div>
        <div className="card bg-base-100 max-w-sm shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemContainer;

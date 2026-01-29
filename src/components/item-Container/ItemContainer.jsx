import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import Cart from "../Cart/Cart";
import { FaRegHeart } from "react-icons/fa";
import {
  addToLocal,
  getLocal,
  removeLocal,
} from "../localStorage/localStorage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const ItemContainer = ({ data }) => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const storedId = getLocal();

    const storedItems = [];

    for (const id of storedId) {
      const cartItem = data.find((item) => item.id === id);
      if (cartItem) {
        storedItems.push(cartItem);
      }
    }
    setCarts(storedItems);
  }, [data]);

  const handleCartAdd = (item) => {
    setCarts([...carts, item]);
    toast.success(`Item added to favorites ❤️`);
    addToLocal(item.id);
  };

  const handleRemoveCart = (item) => {
    setCarts((pevCarts) => pevCarts.filter((cart) => cart !== item));
    toast.error(`Item removed from favorites ❌`);
    removeLocal(item.id);
  };
  return (
    <div className="max-w-11/12 mx-auto flex flex-col lg:flex-row justify-center py-28 gap-6">
      {/* items */}
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 max-w-5xl ">
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
              <Item
                key={item.id}
                item={item}
                handleCartAdd={handleCartAdd}
                handleRemoveCart={handleRemoveCart}
                carts={carts}
              ></Item>
            ))}
          </tbody>
        </table>
      </div>
      {/* cart */}
      <div>
        <div className="card bg-base-100 max-w-sm shadow-sm rounded-3xl">
          <p className="flex justify-center items-center gap-3 text-3xl py-4 border-b-2 border-[#DCE5F3]">
            <FaRegHeart /> Favorite Items
          </p>
          <div className="card-body">
            <div>
              <Cart carts={carts} handleRemoveCart={handleRemoveCart}></Cart>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default ItemContainer;

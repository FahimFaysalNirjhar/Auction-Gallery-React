import React from "react";

const Cart = ({ carts, handleRemoveCart }) => {
  console.log(carts);

  const totalPrice = carts.reduce((prev, cart) => {
    return prev + cart.currentBidPrice;
  }, 0);

  return (
    <div>
      {carts.length === 0 ? (
        <div>
          <div className="flex justify-center items-center flex-col py-4 border-b-2 border-[#DCE5F3]">
            <h1 className="font-sora text-2xl">No favorites yet</h1>
            <p className="text-center">
              Click the heart icon on any item to add it to your favorites
            </p>
          </div>

          <div className="flex justify-between gap-20 w-full pt-4 border-t-2 border-[#DCE5F3]">
            <h1 className="font-sora text-xl ">Total bids Amount</h1>
            <p className="font-sora text-xl font-medium">$0000</p>
          </div>
        </div>
      ) : (
        <div>
          {carts.map((cart) => (
            <div key={cart.id}>
              <div className="flex items-center gap-4 py-4 border-b-2 border-[#DCE5F3]">
                <img
                  src={cart.image}
                  alt={cart.title}
                  className="w-20 h-20 object-cover"
                />

                <div className="flex-1">
                  <h1 className="font-sora font-bold">{cart.title}</h1>
                  <p>
                    ${cart.currentBidPrice} | Bids: {cart.bidsCount}
                  </p>
                </div>

                <button
                  className="btn btn-circle"
                  onClick={() => {
                    handleRemoveCart(cart);
                  }}
                >
                  x
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between gap-20 w-full pt-4 ">
            <h1 className="font-sora text-xl ">Total bids Amount</h1>
            <p className="font-sora text-xl font-medium">{totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

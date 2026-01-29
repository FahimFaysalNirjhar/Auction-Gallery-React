const getLocal = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
};

const addToLocal = (id) => {
  const storedCart = getLocal();
  storedCart.push(id);
  saveToLocal(storedCart);
};
const saveToLocal = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const removeLocal = (id) => {
  const storedId = getLocal();
  const remainingId = storedId.filter((storedCartId) => storedCartId !== id);
  saveToLocal(remainingId);
};

export { addToLocal, getLocal, removeLocal };

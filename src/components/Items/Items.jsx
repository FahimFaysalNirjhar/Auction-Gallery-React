import React from "react";
import Item from "../Item/Item";
import ItemContainer from "../item-Container/ItemContainer";

const Items = ({ data }) => {
  return (
    <div className="bg-[#EBF0F5]">
      <ItemContainer data={data}></ItemContainer>
    </div>
  );
};

export default Items;

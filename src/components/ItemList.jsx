import React from "react";
import SingleItem from "./SingleItem";
import { artistArray } from "../assets/database/artists";

const ItemList = ({ title, items }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <a className="item-list__link" href="/">
          Mostrar tudo
        </a>
      </div>

      <div className="item-list__container">
        {artistArray
          .filter((currValue, index) => index < items)
          .map((currValue, index) => (
            <SingleItem key={`${title}-${index}`} />
          ))}
      </div>
    </div>
  );
};

export default ItemList;

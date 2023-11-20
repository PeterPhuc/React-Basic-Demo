import React from "react";
import PropTypes from "prop-types";
const Clothes = (props) => {
  const { name, type, color, size, remaining, children } = props;
  return (
    <React.Fragment>
      <h1>{children}</h1>
      <ul>
        <li><b>Tên:</b> {name} </li>
        <li><b>Loại:</b> {type} </li>
        <li><b>Màu:</b> {color} </li>
        <li><b>Kích cỡ:</b> {size} </li>
        <li><b>Số lượng:</b> {remaining} </li>
      </ul>
      <hr />
    </React.Fragment>
  );
};
Clothes.defaultProps = {
  remaining: 0,
};
Clothes.propTypes = {
  remaining: PropTypes.number,
};
export default Clothes;

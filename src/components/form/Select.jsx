import React from "react";
import { Col, Select } from "antd";
import PropTypes from "prop-types";

function SelectCol(props) {
  const { cols, label, name, mode, ...other } = props;

  return (
    <Col className="select__col" span={cols}>
      <span>{label}</span>
      <Select
        id={name}
        name={name}
        mode={mode}
        className="tags__select"
        style={{ width: "100%" }}
        optionLabelProp="label"
        {...other}
      />
    </Col>
  );
}

SelectCol.defaultProps = {
  cols: "24",
  label: "",
  name: "name",
  mode: "",
  options: [],
};

SelectCol.propTypes = {
  cols: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  mode: PropTypes.oneOf(["","tags", "multiple"]),
  options: PropTypes.array,
};

export default SelectCol;

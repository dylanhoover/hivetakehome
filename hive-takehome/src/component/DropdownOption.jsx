import React from "react";
import PropTypes from "prop-types";

function DropdownOption({
  option,
  multiple,
  isSelected,
  isSelectAll,
  onClick,
}) {
  const handleCheckboxChange = (e) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <li
      className={isSelected && !isSelectAll ? "selected" : ""}
      onClick={onClick}
      role="option"
      aria-selected={isSelectAll ? undefined : isSelected}
    >
      {multiple && (
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleCheckboxChange}
          onClick={(e) => e.stopPropagation()}
          aria-label={option}
        />
      )}
      {multiple && isSelectAll && (
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleCheckboxChange}
          aria-label="Select All"
        />
      )}
      <span onClick={onClick}>{option}</span>
    </li>
  );
}

DropdownOption.propTypes = {
  option: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  isSelected: PropTypes.bool,
  isSelectAll: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

DropdownOption.defaultProps = {
  multiple: false,
  isSelected: false,
  isSelectAll: false,
};

export default React.memo(DropdownOption);

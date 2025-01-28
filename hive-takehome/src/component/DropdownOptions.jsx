import React from "react";
import PropTypes from "prop-types";
import DropdownOption from "./DropdownOption";

function DropdownOptions({
  options,
  multiple,
  selectedOptions,
  handleOptionClick,
  handleSelectAll,
}) {
  return (
    <ul
      className="dropdown-options"
      role="listbox"
      aria-multiselectable={multiple}
    >
      {multiple && (
        <DropdownOption
          option="Select All"
          isSelectAll
          isChecked={selectedOptions.length === options.length}
          onClick={handleSelectAll}
        />
      )}
      {options.map((option) => (
        <DropdownOption
          key={option}
          option={option}
          multiple={multiple}
          isSelected={selectedOptions.includes(option)}
          onClick={() => handleOptionClick(option)}
        />
      ))}
    </ul>
  );
}

DropdownOptions.propTypes = {
  options: PropTypes.array.isRequired,
  multiple: PropTypes.bool,
  selectedOptions: PropTypes.array,
  handleOptionsClick: PropTypes.func.isRequired,
  handleSelectAll: PropTypes.func.isRequired,
};

export default React.memo(DropdownOptions);

import React, { useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import DropdownButton from "./DropdownButton";
import DropdownOptions from "./DropdownOptions";
import "./Dropdown.css";

export default function Dropdown({
  title,
  options,
  multiple = false,
  isOpen,
  selectedOptions,
  onToggle,
  onChange,
}) {
  const dropdownRef = useRef(null);

  // functions

  const toggleDropdown = () => {
    onToggle(!isOpen);
  };

  const handleOptionClick = useCallback(
    // useCallback to prevent re-renders
    (option) => {
      if (multiple) {
        if (selectedOptions.includes(option)) {
          onChange(selectedOptions.filter((item) => item !== option));
        } else {
          onChange([...selectedOptions, option]);
        }
      } else {
        onChange(option);
        onToggle(false);
      }
    },
    [multiple, selectedOptions, onChange, onToggle]
  );

  const handleSelectAll = useCallback(() => {
    // useCallback to prevent re-renders
    if (selectedOptions.length === options.length) {
      onChange([]);
    } else {
      onChange([...options]);
    }
  }, [selectedOptions, options, onChange]);

  // keyboard navigation
  const handleKeyDown = (e) => {
    switch (e.key) {
      case "Enter":
        e.preventDefault();
        toggleDropdown();
        break;
      case "Escape":
        onToggle(false);
        break;
      default:
        break;
    }
  };

  //effects

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onToggle]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div
        className={`dropdown-title ${
          isOpen || (multiple && selectedOptions.length > 0) ? "active" : ""
        }`}
      >
        {title}
      </div>
      <DropdownButton
        onClick={toggleDropdown}
        isOpen={isOpen}
        onKeyDown={handleKeyDown}
      >
        {isOpen || (multiple ? selectedOptions.length > 0 : selectedOptions)
          ? multiple
            ? selectedOptions.join(", ")
            : selectedOptions
          : title}
      </DropdownButton>
      {isOpen && (
        <DropdownOptions
          options={options}
          multiple={multiple}
          selectedOptions={selectedOptions}
          handleOptionClick={handleOptionClick}
          handleSelectAll={handleSelectAll}
        />
      )}
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  multiple: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  selectedOptions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
  onToggle: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

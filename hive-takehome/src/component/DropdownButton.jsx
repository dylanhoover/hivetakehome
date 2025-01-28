import React from "react";
import PropTypes from "prop-types";

const DropdownButton = React.forwardRef(
  ({ onClick, isOpen, children, onKeyDown }, ref) => (
    <button
      onClick={onClick}
      className={isOpen ? "open" : ""}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      onKeyDown={onKeyDown}
      ref={ref}
    >
      {children}
    </button>
  )
);

DropdownButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onKeyDown: PropTypes.func,
};

export default React.memo(DropdownButton);

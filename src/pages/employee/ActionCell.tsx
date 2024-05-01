import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import vertical from "../../assets/images/more-vertical.svg";

const ActionCell: React.FC<{ row: number }> = ({ row }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleEdit = () => {
    console.log("Edit clicked for row:", row);
    // Handle edit action here
  };

  const handleDelete = () => {
    console.log("Delete clicked for row:", row);
  };

  return (
    <div>
      <Button
        className="bg-white"
        variant="info"
        onClick={toggleDropdown}
        aria-expanded={showDropdown ? "true" : "false"}
      >
        <img src={vertical} alt="" />
      </Button>
      {showDropdown && (
        <Dropdown show={showDropdown} onClick={() => setShowDropdown(false)}>
          <Dropdown.Menu>
            <Dropdown.Item onClick={handleEdit}>Edit</Dropdown.Item>
            <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
};

export default ActionCell;

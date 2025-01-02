import Dropdown from "react-bootstrap/Dropdown";

const CustomDropDown = ({ list, onSelect, variant }) => {
  return (
    <Dropdown onSelect={onSelect}>
      <Dropdown.Toggle variant={variant} id="dropdown-custom-components">
        Select Topic
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {list.map((item, index) => (
          <Dropdown.Item key={index} eventKey={item}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropDown;

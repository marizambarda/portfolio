import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import "./Select.scss";

type SelectProps = {
  options: { value: string; label: string }[];
  onChange: (value: string | null) => void;
};

const Select = ({ options, onChange }: SelectProps) => {
  return (
    <Dropdown className="dropdown" onSelect={(value) => onChange(value)}>
      <Dropdown.Toggle variant="transparent" id="dropdown-basic">
        <FontAwesomeIcon icon={faLanguage} className="icon" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu">
        {options.map((option) => (
          <Dropdown.Item key={option.value} eventKey={option.value}>
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Select;

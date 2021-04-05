import ReactSelect from "react-select";

interface SelectProps {
  options: { value: number | string; label: string }[];
  onSelect: any;
  placeholder?: string;
  name: string;
}

const customStyles = {
  placeholder: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  menu: (provided: any, state: any) => ({
    ...provided,
    width: "100%",

    color: "white",
    background: state.isSelected ? "red" : "var(--gradient-color-one)",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  dropdownIndicator: () => ({
    fill: "white",
    margin: "auto 2px",
  }),

  control: (_: any) => ({
    width: "auto",
    display: "flex",
    color: "white",
    border: "solid 1px white",
    cursor: "pointer",
    fontSize: "0.875rem",
    "&:hover": {
      background: "none",
    },
  }),

  singleValue: (provided: any, state: any) => ({ ...provided, color: "white" }),

  option: (provided: any, state: any) => ({
    ...provided,
    outline: state.isSelected ? "solid 1px white" : "none",
    background: "none",
    cursor: "pointer",
    "&:hover": {
      background: "none",
      outline: "solid 1px white",
    },
  }),

  valueContainer: (provided: any, state: any) => ({
    ...provided,
    color: "white",
    "&:focus": {
      color: "white",
    },
  }),
};

const Select = ({ options, onSelect, placeholder, name }: SelectProps) => {
  return (
    <div>
      <ReactSelect
        name={name}
        options={options}
        onChange={onSelect}
        styles={customStyles}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Select;

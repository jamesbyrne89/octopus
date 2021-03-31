import ReactSelect from "react-select";

interface SelectProps {
  options: { value: number | string; label: string }[];
  onSelect: any;
  placeholder?: string;
}

const customStyles = {
  placeholder: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  menu: (provided: any, state: any) => ({
    ...provided,
    width: 150,

    color: "white",
    background: state.isSelected ? "red" : "transparent",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  control: (_: any) => ({
    width: 150,
    display: "flex",
    color: "white",
    border: "solid 1px white",
  }),

  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

const Select = ({ options, onSelect, placeholder }: SelectProps) => {
  return (
    <div>
      <ReactSelect
        options={options}
        onChange={onSelect}
        styles={customStyles}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Select;

import { useDispatch } from "react-redux";
import styled from "styled-components";
import Select from "../components/select/Select";
import { setYearsAtAddress, setMonthsAtAddress } from "../actions";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const YEAR_OPTIONS = [
  {
    value: 0,
    label: "0 years",
  },
  {
    value: 1,
    label: "1 year",
  },
  { value: 2, label: "2 years" },
  { value: 3, label: "3 years" },
  { value: 4, label: "4 years" },
  { value: "5+", label: "5+ years" },
];

const MONTH_OPTIONS = [
  {
    value: 0,
    label: "0 months",
  },
  {
    value: 1,
    label: "1 month",
  },
  { value: 2, label: "2 months" },
  { value: 3, label: "3 months" },
  { value: 4, label: "4 months" },
  { value: 5, label: "5 months" },
  { value: 6, label: "6 months" },
  { value: 7, label: "7 months" },
  { value: 8, label: "8 months" },
  { value: 9, label: "9 months" },
  { value: 10, label: "10 months" },
  { value: 11, label: "11 months" },
];

const TimeAtAddressInput = () => {
  const dispatch = useDispatch();

  const onSelectYears = (value: number) => {
    dispatch(setYearsAtAddress(value));
  };

  const onSelectMonths = (value: number) => {
    dispatch(setMonthsAtAddress(value));
  };

  return (
    <div>
      <Flex>
        <Select
          onSelect={({ value, label }: { value: number; label: string }) =>
            onSelectYears(value)
          }
          placeholder="Select years"
          options={YEAR_OPTIONS}
        />

        <Select
          onSelect={({ value, label }: { value: number; label: string }) =>
            onSelectMonths(value)
          }
          placeholder="Select months"
          options={MONTH_OPTIONS}
        />
      </Flex>
    </div>
  );
};

export default TimeAtAddressInput;

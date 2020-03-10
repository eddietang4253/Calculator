export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
  displayValue: "0",
  step: ""
};

export const handleEqual = state => {
  const { step } = state;
  if (step.length > 2) {
    return {
      displayValue: eval(step)
    };
  }

  return state;
};

export const handleTap = (value, state, type) => {
  const { step } = state;
  let current = `${step}`;
  if (type == "number") {
    return {
      step: `${step}${value}`,
      displayValue: `${value}`
    };
  } else if (type == "operator") {
    if (
      current[step.length - 1] == "+" ||
      current[step.length - 1] == "-" ||
      current[step.length - 1] == "/" ||
      current[step.length - 1] == "*"
    ) {
      current = `${current.substring(0, current.length - 1)}`;
      return {
        step: `${current}${value}`
      };
    } else {
      return {
        step: `${current}${value}`
      };
    }
  } else {
    return {
      step: `${step}${value}`
    };
  }
};
const calculate = (type, value, state) => {
  switch (type) {
    case "number":
      return handleTap(value, state, type);
    case "operator":
      return handleTap(value, state, type);
    case "equal":
      return handleEqual(state);
    case "clear":
      return initialState;
    default:
      return state;
  }
};

export default calculate;

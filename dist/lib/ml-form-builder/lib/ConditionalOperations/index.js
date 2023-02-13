import { get, forEach, isEmpty } from "lodash";
const compare = (value1, operator, value2) => {
    switch (operator) {
        case ">":
            return value1 > value2;
        case "<":
            return value1 < value2;
        case ">=":
            return value1 >= value2;
        case "<=":
            return value1 <= value2;
        case "==":
            return value1 == value2;
        case "!=":
            return value1 != value2;
        case "===":
            return value1 === value2;
        case "!==":
            return value1 !== value2;
        default:
            return false;
    }
};
const getConditionalOutput = (itemCondition, formikProps) => {
    const itemValue = get(formikProps, `values.${itemCondition.key}`);
    return compare(itemValue, itemCondition.operator, itemCondition.compareValue);
};
const hasTruthyValue = (logicalOperation = "AND", values, formikProps) => {
    let outputResult = false;
    forEach(values, (item, index) => {
        const result = getConditionalOutput(item, formikProps);
        if (logicalOperation === "AND" && !result) {
            outputResult = false;
            return false;
        }
        if (logicalOperation === "OR" && result) {
            outputResult = true;
            return false;
        }
        if (index === values.length - 1) {
            outputResult = logicalOperation === "AND" ? true : false;
        }
        return;
    });
    return outputResult;
};
export const getConditionalProps = (itemConfig, formikProps) => {
    const conditionInstructions = itemConfig.condition;
    if (!conditionInstructions || isEmpty(conditionInstructions.values)) {
        return { finalProps: {} };
    }
    const isValidCondition = hasTruthyValue(conditionInstructions.logicOpn, conditionInstructions.values || [], formikProps);
    //console.log('Conditional props valid condition', isValidCondition);
    if (isValidCondition) {
        /*
            IF CONDITION IS TRUE THEN RETURN THE TRUTHY PROPS ELSE RETURN THE DEFAULT PROPS
            */
        return { finalProps: conditionInstructions.postEffectProps };
    }
    else {
        if (conditionInstructions.hidden === true)
            return { finalProps: conditionInstructions.defaultProps, hidden: true };
        else
            return { finalProps: conditionInstructions.defaultProps };
    }
};
//# sourceMappingURL=index.js.map
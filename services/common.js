export const roundOffDecimals = (value, decimal = 2) => {
    return parseFloat(parseFloat(value).toFixed(decimal))
}

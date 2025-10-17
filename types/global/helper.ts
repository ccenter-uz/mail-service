export const removeSymbols = ({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
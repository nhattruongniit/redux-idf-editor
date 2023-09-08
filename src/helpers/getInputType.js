export function getInputType({ type }) {
  let inputType = 'number';
  if (type === 'alpha') {
    inputType = 'text'
  }
  if (type === 'node') {
    inputType = 'node'
  }

  return inputType;
}
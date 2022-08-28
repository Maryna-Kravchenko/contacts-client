export function checkInput(input) {
  const { min, max } = input.dataset;
  if (!input.value) {
    input.nextElementSibling.innerText = 'This field is required';
    return false;
  }
  if (input.value.length < min) {
    input.nextElementSibling.innerText = `This field has min value ${min}`;
    return false;
  }
  if (input.value.length > max) {
    input.nextElementSibling.innerText = `This field has min value ${max}`;
    return false;
  }
  input.nextElementSibling.innerText = '';
  return true;
}

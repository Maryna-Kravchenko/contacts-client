import { renderItem } from './render.js';
import { checkInput } from './validation.js';
import { HOST, request } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.querySelector('form');
  const data = await fetch(`${HOST}/contacts`);
  const contacts = await data.json();

  Object.values(contacts).forEach(renderItem);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    event.target.elements.disable = true;

    const isValid = [...form.elements]
      .filter((input) => input.tagName === 'INPUT')
      .every((input) => checkInput(input));

    if (isValid) {
      const contact = await request('POST', new FormData(form));
      renderItem(contact);
      form.reset();
    }
    event.target.elements.disable = false;
  });

  form.addEventListener('change', ({ target }) => {
    checkInput(target);
  });
});

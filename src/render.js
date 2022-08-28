const contacts = document.querySelector('.contacts');

export function renderItem({ name, id, number }) {
  const item = document.createElement('li');
  item.classList.add('contact');
  item.dataset.id = id;

  item.innerHTML = `
    <h2 class='contact__title'>
      ${name}
    </h2>
    <a href="tel:${number}">
      ${number}
    </a>
  `;
  contacts.append(item);
}

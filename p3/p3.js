// api url: https://jsonplaceholder.typicode.com/users

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    return res.json();
  })
  .then(data => {
    renderHTML(data);
  })
  .catch(err => console.log(err));

const list = document.querySelector('.list');

list.addEventListener('click', e => {
  let target = e.target;
  if (target.classList.contains('btn__del')) {
    target.parentNode.remove();
  }
});

function renderHTML(obj) {
  console.log(obj);
  list.innerHTML = '';
  for (let i of obj) {
    let { id, name, email, company } = i;
    let companyName = company.name;
    let html = `
      <li>${id}. ${name} / ${companyName} / ${email} <button class="btn__del">刪除</button></li>
    `;
    let element = document.createElement('li');
    element.innerHTML = html;
    list.append(element);
  }
}

// 把程式碼寫在這檔案裡面

const randomFoods = ['拉麵', '泡麵', '乾麵', '陽春麵', '牛肉麵'];

const btnAdd = document.querySelector('.btn__add');
const btnDel = document.querySelector('.btn__del');
const btnLuck = document.querySelector('.btn__luck');

const list = document.querySelector('.list');

btnAdd.addEventListener('click', e => {
  const content = document.querySelector('.input__content').value;
  let html = `${content}<button class="item__del">刪除</button>
  `;
  let element = document.createElement('li');
  element.innerHTML = html;
  list.append(element);

  document.querySelector('.input__content').value = '';
});

btnDel.addEventListener('click', e => {
  list.innerHTML = '';
});

btnLuck.addEventListener('click', e => {
  const num = Math.floor(Math.random() * 5);
  let html = `${randomFoods[num]}<button class="item__del">刪除</button>
  `;
  let element = document.createElement('li');
  element.innerHTML = html;
  list.append(element);
});

list.addEventListener('click', e => {
  const target = e.target;
  if (target.classList.contains('item__del')) {
    console.log(target);
    target.parentNode.remove();
  }
});

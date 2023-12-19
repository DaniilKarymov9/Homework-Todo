import 'style';

// task 4 Todo list (change, submit preventDefault, form)
// Ісунує форма з інпутом, куди вводиться текст. І є чекбокс.
// Поки чекбокс не відмічений, кнопка "Add" не активна.
// Натисканням ентер в інпуті або кнопкою в список додається нотатка
// Очистити інпут
// Прибрати перезавантаження
// При натисканні на замітку вона стає перекресленою
// Чекбокс при додаванні нотатки має стати не вибраним, а кнопка знову недоступною.

const refs = {
    checkbox: document.querySelector("input[name='confirm']"),
    addBtn: document.querySelector("button[type='submit']"),
    input: document.querySelector("input[name='todoInput']"),
    form: document.querySelector('form'),
    list: document.querySelector('ol'),
  };
  
  refs.addBtn.disabled = true;
  
  function toggleAddButton() {
    refs.addBtn.disabled = !refs.input.value.trim() || refs.checkbox.checked;
  }
  
  refs.checkbox.addEventListener('change', toggleAddButton);
  
  refs.form.addEventListener('submit', (e) => {
    event.preventDefault();
  
    if (refs.input.value.trim()) {
      const newTodo = document.createElement('li');
      newTodo.textContent = refs.input.value;
      newTodo.addEventListener('click', () => {
        newTodo.classList.toggle('crossed');
      });
  
      refs.list.appendChild(newTodo);
  
      refs.input.value = '';
      refs.addBtn.disabled = true;
      refs.checkbox.checked = false;
    }
  });
  
  refs.checkbox.addEventListener('click', () => {
    refs.input.value = '';
    refs.addBtn.disabled = true;
  });
  
  refs.input.addEventListener('input', toggleAddButton);
  
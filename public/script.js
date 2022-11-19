// const input_text = document.getElementById('input-text');
// const todo_list = document.getElementById('todo-list');
// const add_button = document.getElementById('add-button');
// var del_buttons = document.querySelectorAll('.del-btn');

// input_text.focus()
// add_button.addEventListener("click", e => {
//     add_todo();
//     input_text.focus()
// });

// input_text.addEventListener("keyup", e => {
//     if (e.key === 'Enter') add_todo();
// })

// function add_del_action() {
//     del_buttons = document.querySelectorAll('.del-btn');
//     del_buttons.forEach(btn => {
//         btn.addEventListener("click", e => {
//             remove_todo(e, btn)
//             input_text.focus()
//         })
//     });
// }

// function remove_todo(e, btn) {
//     btn.parentElement.parentElement.outerHTML=''
// }

// function add_todo() {
//     if (input_text.value === '') return;
//     todo_list.innerHTML +=
//     `<li class="list-group-item py-0">
//         <div class="d-flex my-0 py-0 align-items-center">
//             <p class="lead m-0">${ input_text.value }</p>
//             <button class="btn ms-auto del-btn btn-lg">
//                 <i class="fa fa-trash"></i>
//             </button>
//         </div>
//     </li>`

    
//     input_text.value = ''
//     add_del_action()
// }
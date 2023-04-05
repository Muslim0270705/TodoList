let tasks = [
    {
        id: 1,
        text: 'Buy cars',
        isDone: false,
        isImportant: false
    },
    {
        id: 2,
        text: 'Buy toy',
        isDone: false,
        isImportant: false
    },
    {
        id: 3,
        text: 'Buy toy',
        isDone: false,
        isImportant: false
    }
]

let list = document.querySelector('.todo__list')
const addTaskInTodo = () => {
    list.innerHTML = ''
    tasks.forEach((item) => {
        list.innerHTML += `
            <li data-id=${item.id}  class="todo__item ${item.isDone ? "active" : ""}">
                <span>${item.text}</span>
                <div class="todo__item-btns">
                    <button class="todo__item-btn done " data-id=${item.id}>Done</button>
                    <button class="todo__item-btn important">Important</button>
                    <button class="todo__item-btn delete" data-id=${item.id}>X</button>
                </div>
            </li>
        `
    })

    console.log(tasks)

    let deleteBtn = document.querySelectorAll('.delete')
    let todoItem = document.querySelectorAll('.todo__item')
    todoItem = Array.from(todoItem)
    Array.from(deleteBtn).forEach((item) => {
        item.addEventListener('click', () => {
            tasks = tasks.filter((el) =>  el.id !== +item.dataset.id)
            addTaskInTodo()
        })
    })
    let doneBtn = document.querySelectorAll(".done")
    Array.from(doneBtn).forEach((item) => {
        item.addEventListener("click", (e) => {
            tasks = tasks.map(el => el.id === +item.dataset.id ? {...el,isDone: !el.isDone} : el)

            addTaskInTodo()
        })
    })

}

addTaskInTodo()


let form = document.querySelector('.todo__form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    tasks = [...tasks, {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        text: event.target[0].value,
        isDone: false,
        isImportant: false
    }]

    addTaskInTodo()

    event.target[0].value = ''
})
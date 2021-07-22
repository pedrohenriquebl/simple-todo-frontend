(() => {
    const createEvent = (event)=> {
        event.preventDefault();
        
        const list = document.querySelector('[data-form-list]')
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        
        const task = document.createElement("li");
        task.classList.add('task');
        const content = `<p class="content">${value}</p>`

        task.innerHTML = content;

        task.appendChild(doneButton())
        task.appendChild(deleteButton())
        list.appendChild(task)

        
        input.value = " "
    }
    
    
    const button = document.querySelector('[data-form-button]')
    button.addEventListener('click', createEvent)

    const doneButton = () => {
        const buttonChecked = document.createElement('button')

        buttonChecked.classList.add('check-button');
        buttonChecked.innerText = 'concluir';

        buttonChecked.addEventListener('click', doneTask);

        return buttonChecked;
    }

    const doneTask = (event) =>{
        const buttonChecked = event.target;

        const taskDone = buttonChecked.parentElement;
        taskDone.classList.toggle('done')
    }

    const deleteButton = () => {
        const buttonD = document.createElement('button')

        buttonD.innerHTML = 'deletar'
        buttonD.addEventListener('click', deleteTask)

        return buttonD;
    }

    const deleteTask = (event) => {
        const removeTask = event.target

        const taskDone = removeTask.parentElement;

        taskDone.remove();

        return removeTask;
    }
}
)()
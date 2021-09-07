const inputVal = document.getElementsByClassName('inputVal')[0];
const addTaskBtn = document.getElementsByClassName('btn')[0];

addTaskBtn.addEventListener('click', function () {
    if (inputVal.value.trim() != 0) {
        let localItems = JSON.parse(localStorage.getItem('data'))
        if (localItems === null) {
            taskList = []
        } else {
            taskList = localItems;
        }
        taskList.push(inputVal.value)
        localStorage.setItem('data', JSON.stringify(taskList));
    }
    showItem()
})

function showItem() {
    let localItems = JSON.parse(localStorage.getItem('data'))
    if (localItems === null) {
        taskList = []

    } else {
        taskList = localItems;
    }
    let html = '';
    let itemShow = document.querySelector('.todoLists');
    taskList.forEach((data, index) => {
        html += `
    <div class="todoList" onclick="deleteItem(${index})">
    <p>${data}</p>    
    </div>   
    `
    })
    itemShow.innerHTML = html;
    inputVal.value = "";
}
showItem()

function deleteItem(index) {
    let localItems = JSON.parse(localStorage.getItem('data'))
    taskList.splice(index, 1)
    localStorage.setItem('data', JSON.stringify(taskList));
    showItem()
}

function clearTask() {
    localStorage.clear()
    showItem()
}
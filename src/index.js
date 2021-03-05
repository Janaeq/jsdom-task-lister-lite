document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log('The DOM is loaded');
  let form = document.getElementById("create-task-form");
  form.addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
    event.preventDefault();

    const listNode = document.createElement('li')
    const taskList = document.getElementById("tasks")
    const input = event.target.querySelector("#new-task-description")
    let inputValue = input.value
    taskList.appendChild(listNode).innerHTML = inputValue
    event.target.reset();
}
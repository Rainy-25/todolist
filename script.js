let button = document.querySelector('#add');
let list = document.querySelector('#list');
let input = document.querySelector('#input-container input');

      
button.onclick = function() {
           if (input.value.length == 0) {
            alert("Pleast enter task");
           } else {
            list.innerHTML += `
            <div class="task">
            <span id="taskname">
            ${input.value}
            </span>
            <button class="delete">
            <i class="fa-solid fa-trash"></i>
            </button>
            </div>
            `
 };

let dele = document.querySelectorAll('.delete');
for (let i = 0; i < dele.length; i++) {
    dele[i].onclick = function() {
        this.parentNode.remove();
    }
}

}
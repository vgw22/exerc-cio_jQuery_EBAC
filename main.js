const form = document.getElementById('task-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let line = addLine();
    updateTable(line);
})

function addLine() {
    inputTask = document.getElementById('task-input');

    let line = `<ul>`;
    line += `<li>${inputTask.value}</td>`;
    line += `</ul>`;

    inputTask.value = '';

    return line;
}

function updateTable(line) {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML += line;

    inputTask.value = '';
}


$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#cancel-button').click(function() {
        $('form').slideUp();
    })
    $('body').on('click', 'ul li', function() {
        $(this).css('text-decoration', 'line-through');
    })
})
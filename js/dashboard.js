document.addEventListener("DOMContentLoaded", function () {


    const menuMain = document.querySelector('.dashboard__sidebar-menu-main');
    const menuTasks = document.querySelector('.dashboard__sidebar-menu-tasks');
    const menuCreate = document.querySelector('.dashboard__sidebar-menu-create');

    const dataMain = document.querySelector('.dashboard__data-main');
    const dataTasks = document.querySelector('.dashboard__data-tasks');
    const dataCreate = document.querySelector('.dashboard__data-create');

    const menuItems = document.querySelectorAll('.menu__item')


    const taskStatus = document.querySelectorAll('.task-status');



    for (let i = 0; i < taskStatus.length; i++) {
        if (taskStatus[i].innerHTML.includes('В роботі')) {
            taskStatus[i].classList.add('_work')
        } else
        if (taskStatus[i].innerHTML.includes('Оцінка')) {
            taskStatus[i].classList.add('_wait')
        } else
        if (taskStatus[i].innerHTML.includes('Виконано')) {
            taskStatus[i].classList.add('_done')
        }
    }

    menuMain.addEventListener('click', function () {
        menuTasks.classList.remove('_active');
        dataTasks.classList.remove('_active');

        menuCreate.classList.remove('_active');
        dataCreate.classList.remove('_active');

        menuMain.classList.add('_active');
        dataMain.classList.add('_active');
    })

    menuTasks.addEventListener('click', function () {
        menuMain.classList.remove('_active');
        dataMain.classList.remove('_active');

        menuCreate.classList.remove('_active');
        dataCreate.classList.remove('_active');

        menuTasks.classList.add('_active');
        dataTasks.classList.add('_active');
    })

    menuCreate.addEventListener('click', function () {
        menuMain.classList.remove('_active');
        dataMain.classList.remove('_active');

        menuTasks.classList.remove('_active');
        dataTasks.classList.remove('_active');

        menuCreate.classList.add('_active');
        dataCreate.classList.add('_active');
    })


});
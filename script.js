let navbar = document.querySelector('.navbar');
document.querySelector('#menubtn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.searchform');
document.querySelector('#searchbtn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

windows.onscroll= () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


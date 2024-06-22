// all the rirht of this js library functins premade by developers of NoteX studios belongs to NoteX studios

const aboutList = document.getElementById('aboutList');
const about = document.getElementById('aboutAnchor');
const aboutIcon = document.getElementById('aboutIcon');

const academicsList = document.getElementById('academicsList');
const academics = document.getElementById('academicsAnchor');
const academicsIcon = document.getElementById('academicsIcon');

function displayChanger (element1, element2 , event, display){
    element1.addEventListener(event, ()=>{
        element2.style.display = display;
    })
}

about.addEventListener('mouseover', () => {
    aboutIcon.classList.remove('fa-angle-down');
    aboutIcon.classList.add('fa-angle-up');
})

about.addEventListener('mouseout', () => {
    aboutIcon.classList.add('fa-angle-down');
    aboutIcon.classList.remove('fa-angle-up');

})

academics.addEventListener('mouseover', () => {
    academicsIcon.classList.remove('fa-angle-down');
    academicsIcon.classList.add('fa-angle-up');
})

academics.addEventListener('mouseout', () => {
    academicsIcon.classList.add('fa-angle-down');
    academicsIcon.classList.remove('fa-angle-up');

})

displayChanger(about, aboutList, 'mouseover', 'block');
displayChanger(about, aboutList, 'mouseout', 'none');
displayChanger(academics, academicsList, 'mouseover', 'block');
displayChanger(academics, academicsList, 'mouseout', 'none');


const miniNav = document.getElementById('miniNav')
const hamButton = document.getElementById('hamButton')

hamButton.addEventListener('click', ()=>{
    miniNav.classList.toggle('hidden');
})
// not for now
/*
const currentPath = window.location.pathname;
const currentPage = currentPath.split('/').pop();
console.log(currentPath);

if ( currentPage === '' ){
    document.getElementById('homeNav').classList.add('border-b-4')
    document.getElementById('homeNav').classList.add('font-bold')
}

if ( (currentPage === 'pages/about/overview.html'||'pages/about/adminstration.html'||'pages/about/staffs.html')&&(currentPage!== "")){
    document.getElementById('aboutNav').classList.add('border-b-4')
    document.getElementById('aboutNav').classList.add('font-bold')
}
*/

// contact JS
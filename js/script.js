const burger = document.getElementById('burger');
const modalDiv  = document.getElementById('modal-div')
const workContainer = document.getElementById('work-container');
const brandBtn = document.getElementById('brand')

// const navlinks = document.getElementById('navlinks')

// burger.addEventListener('click',() => {
//     // remove the center div
//     burger.children[1].classList.toggle('opacity-0');
//     // remove translate and rotate the top div
//     burger.children[0].classList.toggle('-rotate-45');
//     burger.children[0].classList.toggle('translate-y-2');
//     // remove translate and rotate the bottom div
//     burger.children[2].classList.toggle('rotate-45');
//     burger.children[2].classList.toggle('-translate-y-2');

//     // bring navlinks into view of screen
//     // navlinks.classList.toggle('translate-x-full')
// });

brandBtn.addEventListener('click', () => {
    window.scrollTo(0,0)
})


projects.forEach(project => {
    
    const divEl = document.createElement('div');
    divEl.innerHTML = `<div id="modal-${project.id}" aria-hidden='true' aria-modal='true' role='dialog' class='hidden overflow-y-hidden overflow-x-hidden h-full fixed right-0 left-0 top-0 z-50 justify-center items-center'>
    <div class="flex rounded m-4 w-full max-w-6xl h-4/5 bg-white">
        
        <div class="w-full h-full flex flex-col">
            <div class="flex justify-between items-center px-8 py-5 rounded-t bg-white">
                <h3 class="text-2xl font-medium">${project.title}</h3>
                <button id="modal-${project.id}-close-btn" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
             </div>
            <div class="flex grow">
            <div class="sm:flex flex-col w-1/2 hidden">
                <iframe class='rounded-bl w-full grow border border-sky-900' src="${project.website}"></iframe>
            </div>
            
            <div class='w-full grow sm:w-1/2 flex flex-col justify-start sm:justify-center items-start gap-2 sm:gap-3 px-6 pb-5'>
                <div class='sm:hidden w-full grow'>
                    <img class = 'object-contain object-center h-full w-full' src = "${project.img}">
                </div>
                <p class="text-blue-700 text-xl">${project.tags.con}</p>
                <p class="text-xl">${project.description}</p>
                <div class="space-x-2">
                    <a class="rounded bg-red-500 text-white cursor-pointer px-3 py-1 text-xl" href="${project.website}" target="_blank">Website</a>
                    <a class="rounded bg-red-500 text-white cursor-pointer px-3 py-1 text-xl" href="${project.repo}" target="_blank"><i class='fab fa-github'></i> Repo</a>
                </div>
            </div>
        </div>
        
    </div>
    </div>`
    modalDiv.append(divEl);

    const divEl2 = document.createElement('div');
    divEl2.setAttribute('id', `btnModal-${project.id}`);
    divEl2.setAttribute('class', 'grow flex flex-col justify-start cursor-pointer py-1 px-3 rounded border border-sky-900 hover:-translate-y-1 hover:shadow-lg transition');
    divEl2.innerHTML = `<h2 class="text-2xl">${project.title}</h2><p>${project.tags.normal}</p>`;

    workContainer.append(divEl2);

    document.getElementById(`btnModal-${project.id}`).addEventListener('click', (event) => {
        document.getElementById(`modal-${project.id}`).classList.toggle('flex');
        document.getElementById(`modal-${project.id}`).classList.toggle('hidden');
        const backdrop = document.createElement('div');
        backdrop.setAttribute('id', 'backdrop');
        backdrop.setAttribute('modal-backdrop', 'true');
        backdrop.setAttribute('class', 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40');
        document.body.append(backdrop);
    })
    document.getElementById(`modal-${project.id}-close-btn`).addEventListener('click', (event) => {
        document.getElementById(`modal-${project.id}`).classList.toggle('flex');
        document.getElementById(`modal-${project.id}`).classList.toggle('hidden');
        document.body.removeChild(backdrop);   
    })

});
function myWorkCTARender() {
    const cta = document.createElement('div');
    cta.setAttribute('class', 'flex pb-5')
    cta.innerHTML = `<div class="flex w-1/2 flex-col items-center gap-2">
                        <h3 class='text-xl'>Are You Sold?</h3>
                        <a href="#contact" class='btn tran'>Get In Touch</a>
                    </div>
                    <div class="flex w-1/2 flex-col items-center gap-2">
                        <h3 class='text-xl'>Want to See More?</h3>
                        <a href='https://github.com/kbario' target="_blank" class="btn tran">Github</a>
                    </div>`
    workContainer.appendChild(cta)
}

myWorkCTARender();


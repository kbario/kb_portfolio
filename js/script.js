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
    <div class="flex flex-col rounded  m-4 w-full max-w-lg h-4/5 bg-white">
        <div class="flex justify-between items-center p-5 rounded-t bg-white">
            <h3 class="text-xl font-medium">${project.title}</h3>
            <button id="modal-${project.id}-close-btn" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        <img class='grow overflow-hidden object-contain object-center' src="${project.img}" alt="">
        <div class='mx-8 py-5 text-stone-700 dark:text-stone-200'>
            <p class="text-blue-700">${project.tags.con}</p>
            <p class="mb-4">${project.description}</p>
            <a class="rounded bg-red-500 text-white cursor-pointer px-3 py-1" href="${project.website}">Website</a>
            <a class="rounded bg-red-500 text-white cursor-pointer px-3 py-1" href="${project.repo}"><i class='fab fa-github'></i> Repo</a>
        </div>
    </div>
    </div>`
    modalDiv.append(divEl);

    const divEl2 = document.createElement('div');
    divEl2.setAttribute('id', `btnModal-${project.id}`);
    divEl2.setAttribute('class', 'grow flex flex-col justify-start border-t cursor-pointer py-1 hover:bg-red-50');
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
    cta.setAttribute('class', 'flex')
    cta.innerHTML = `<div class="flex w-1/2 flex-col items-center">
                        <h3>Are You Already Sold?</h3>
                        <button class='rounded bg-red-600 text-white px-3 py-1'>Get In Touch</button>
                    </div>
                    <div class="flex w-1/2 flex-col items-center">
                        <h3>Wanna See More?</h3>
                        <button class="rounded bg-red-600 text-white px-3 py-1">Github</button>
                    </div>`
    workContainer.appendChild(cta)
}

myWorkCTARender();

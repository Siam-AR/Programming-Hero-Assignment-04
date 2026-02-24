let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';


let total = document.getElementById('total');
let interviewCount = document.getElementById('inerview');
let rejectedCount = document.getElementById('rejected');
let totalJobsText = document.querySelector('.total-jobs');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('Rejected-filter-btn');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');


function calculateCount() {

    const totalCards = allCardSection.children.length;

    total.innerText = totalCards;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
    totalJobsText.innerText = totalCards;

        if (totalCards === 0 && currentStatus === 'all-filter-btn') {
        allCardSection.innerHTML = renderEmptyState();
    }
}

calculateCount();


function toggleStyle(id) {

    allFilterBtn.classList.remove('btn-info', 'text-white');
    interviewFilterBtn.classList.remove('btn-info', 'text-white');
    rejectedFilterBtn.classList.remove('btn-info', 'text-white');

    const selected = document.getElementById(id);
    selected.classList.add('btn-info', 'text-white');

    currentStatus = id;

    if (id === 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    }
    else if (id === 'Rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }
    else {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
}


mainContainer.addEventListener('click', function (event) {

    const card = event.target.closest('.relative');
    if (!card) return;

    const companyName = card.querySelector('.company-name').innerText;
    const jobTitle = card.querySelector('.job-title').innerText;
    const jobMeta = card.querySelector('.job-meta').innerText;
    const description = card.querySelector('.description').innerText;
    const statusElement = card.querySelector('.job-status');

    if (event.target.innerText === "INTERVIEW") {

        statusElement.innerText = "INTERVIEW";
        statusElement.classList.remove('bg-primary-content');
        statusElement.classList.add('bg-green-100');

        const exist = interviewList.find(item => item.companyName === companyName);

        if (!exist) {
            interviewList.push({
                companyName,
                jobTitle,
                jobMeta,
                description,
                status: "INTERVIEW"
            });
        }

        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        if (currentStatus === 'Rejected-filter-btn') renderRejected();

        calculateCount();
    }

    if (event.target.innerText === "REJECTED") {

        statusElement.innerText = "REJECTED";
        statusElement.classList.remove('bg-primary-content');
        statusElement.classList.add('bg-red-100');

        const exist = rejectedList.find(item => item.companyName === companyName);

        if (!exist) {
            rejectedList.push({
                companyName,
                jobTitle,
                jobMeta,
                description,
                status: "REJECTED"
            });
        }

        interviewList = interviewList.filter(item => item.companyName !== companyName);

        if (currentStatus === 'interview-filter-btn') renderInterview();

        calculateCount();
    }

    if (event.target.closest('i')) {

        interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        card.remove();

        calculateCount();

        if (currentStatus === 'interview-filter-btn') renderInterview();
        if (currentStatus === 'Rejected-filter-btn') renderRejected();
    }

});


function renderInterview() {

    filterSection.innerHTML = '';

    if (interviewList.length === 0) {
        filterSection.innerHTML = renderEmptyState();
        return;
    }

    for (let job of interviewList) {

        let div = document.createElement('div');
        div.className = 'relative p-8 rounded-lg bg-[#F1F2F43] shadow-sm';

        div.innerHTML = `
            <button class="absolute rounded-full border border-base-300 top-4 right-4 px-4 py-2">
                <i class="fa-regular fa-trash-can"></i>
            </button>

            <div class="space-y-6">
                <div>
                    <p class="company-name text-4xl font-semibold">${job.companyName}</p>
                    <p class="job-title text-gray-500">${job.jobTitle}</p>
                </div>

                <div>
                    <p class="job-meta text-gray-600">${job.jobMeta}</p>
                </div>

                <p class="job-status inline-block bg-green-100 p-2 rounded font-medium text-gray-700">
                    ${job.status}
                </p>

                <p class="description text-gray-500">${job.description}</p>

                <div class="flex gap-4">
                    <button class="btn btn-outline btn-success font-bold">INTERVIEW</button>
                    <button class="btn btn-outline btn-error font-bold">REJECTED</button>
                </div>
            </div>
        `;

        filterSection.appendChild(div);
    }
}

function renderRejected() {

    filterSection.innerHTML = '';

    if (rejectedList.length === 0) {
        filterSection.innerHTML = renderEmptyState();
        return;
    }

    for (let job of rejectedList) {

        let div = document.createElement('div');
        div.className = 'relative p-8 rounded-lg bg-[#F1F2F43] shadow-sm';

        div.innerHTML = `
            <button class="absolute rounded-full border border-base-300 top-4 right-4 px-4 py-2">
                <i class="fa-regular fa-trash-can"></i>
            </button>

            <div class="space-y-6">
                <div>
                    <p class="company-name text-4xl font-semibold">${job.companyName}</p>
                    <p class="job-title text-gray-500">${job.jobTitle}</p>
                </div>

                <div>
                    <p class="job-meta text-gray-600">${job.jobMeta}</p>
                </div>

                <p class="job-status inline-block bg-red-100 p-2 rounded font-medium text-gray-700">
                    ${job.status}
                </p>

                <p class="description text-gray-500">${job.description}</p>

                <div class="flex gap-4">
                    <button class="btn btn-outline btn-success font-bold">INTERVIEW</button>
                    <button class="btn btn-outline btn-error font-bold">REJECTED</button>
                </div>
            </div>
        `;

        filterSection.appendChild(div);
    }
}


function renderEmptyState() {
    return `
        <div class="bg-white rounded-xl p-20 text-center space-y-5 shadow-sm">
            <img src="./assets/jobs.png" class="mx-auto w-20 opacity-80" />
            <h2 class="text-2xl font-bold text-[#002C5C]">
                No jobs available
            </h2>
            <p class="text-gray-500">
                Check back soon for new job opportunities
            </p>
        </div>
    `;
}
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
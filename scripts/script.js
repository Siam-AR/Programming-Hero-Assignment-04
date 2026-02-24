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
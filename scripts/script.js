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
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
    totalJobsText.innerText = allCardSection.children.length;
}

calculateCount();

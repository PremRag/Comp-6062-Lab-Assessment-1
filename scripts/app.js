
const studentFullName   = 'Gudishala Prem Rag';
const studentNumber     = 1198030;

const result            = `${studentFullName} - ${studentNumber}`;

console.log(result);    //this will print both student name and number uisng only single code line.

const headerContent     = document.querySelector('h1');

headerContent.innerHTML = `${studentFullName} - ${studentNumber}`;

headerContent.classList.add('headingPrimary');
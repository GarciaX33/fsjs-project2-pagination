/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
***/
/*** will select the student item class with queryselectorAll ***/
const studentItem = document.querySelectorAll(".student-item");
/*** will show maximum 10 students per page ***/
const maxStudents = 10;
const maxPages = 15;
/** will show max number of pages need **/
const pageNumber = Math.ceil(studentItem.length / maxStudents);



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
***/
//show page function
showPage = (list, page) => {
  for (let i = 0; i < studentItem.length; i++ ) {
    if( i >= (page - 1) * maxStudents && i < (page * maxStudents)) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
}
//show page function with student item class
showPage(studentItem, 1)



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = () => {
  console.log(maxPages);
  console.log(pageNumber);
  /** will ceate div w/ pagination class **/
  let div = document.createElement("div");
    div.className = "pagination";
    document.querySelector(".page").appendChild(div);
  /** will append to ul **/
  let ul = document.createElement("ul");
    div.appendChild(ul);
  for (let i = 1; i < pageNumber; i++) {

      let li = document.createElement("li");
      let a = document.createElement("a");
  /** will add eventlistener on bt click **/
    a.addEventListener("click",(e)=> {
      const getAllanchor = e.target.parentNode.parentNode.querySelectorAll("a");
         for (let j=0; j < getAllanchor.length; j++) {
            getAllanchor[j].classList.remove("active");
           }
           e.target.classList.add("active");
           showPage(studentItem, i+1);
        });/** will add number buttons **/
        a.href = "#";
        a.textContent = i;

        li.appendChild(a);
        ul.appendChild(li);

        if(i == 0) {
           a.classList.add("active");
        }
     }


}



appendPageLinks(); /** calling function, creates the page links **/

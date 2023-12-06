const createIssueButton = document.querySelector(".create-button");
const todoContainer = document.getElementById("todo");
const textArea = document.querySelector(".issue-input");

const onClickCreateIssue = () => {
    // hide the button and show the text area
    createIssueButton.classList.add("hide");
    textArea.classList.remove("hide");
    textArea.focus();
}

function addNewIssue(cardTitle){
   // create a card element and append it the todo conatiner
   // show the create issue button and hide the textarea

   // 1 step
   const card = document.createElement("div");
   card.innerText = cardTitle;
   
   card.className = "card";
   card.draggable = true;
   // for every card the data-conatiner defines where it is ? in todo | un-progress | done

   card.setAttribute("data-conatiner", todoContainer.id)
   card.addEventListener("dragstart", onDragStart);

   todoContainer.appendChild(card);
   // show create issue button
   createIssueButton.classList.remove("hide");
   // hide create issue text
   textArea.classList.add("hide");
    
   textArea.value = "";
}

textArea.addEventListener("keyup", (event) =>{
    if(event.keyCode === 13){
        // user clicked enter key
        const value = textArea.value;
        if(value=="")
        {
            alert("Please enter some value");
        }
        else{
            addNewIssue(value);
        }
    }
})

createIssueButton.addEventListener("click", onClickCreateIssue);
/**
 * Drag events
 */

const box = document.getElementById("box");
const container = document.getElementById("container");


// Draggable box events
box.addEventListener("dragstart", () => {
    console.log("started dragging");
});

box.addEventListener("dragend", () => {
    console.log("ended dragging");
})


// container events
/**
 * 1. dragenter
 * 2. dragover
 * 3. dragleave
 * 4. drop
 */

container.addEventListener("dragenter", () =>{
    // console.log("some item is entered the conatiner");
    container.className = "focused";
})

container.addEventListener("dragover", (event)=>{
    // if we prevent the default behaviour here, the drop evnt will be triggered
   event.preventDefault();
    console.log("some item is roaming on the container");
})


container.addEventListener("dragleave", ()=>{
    // console.log("some item left the container");

    container.className = "";
})

container.addEventListener("drop", ()=>{
    // console.log("dropped an item");
    container.className = "";

    // box will be connected as a children for the conatiner
    // box will be disconnected automatically with the body element
    //
    container.appendChild(box);
})
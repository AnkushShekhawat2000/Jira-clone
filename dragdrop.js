const containers = document.getElementsByClassName("container");
// container = [todo, inProgress, done]

// since every container is dropzone, drop event should be attached for all three containers

const draggingInfo = {
    // sourceContainer defines from where the card is dragged
    sourceContainer: null,
    // draggedElement => the html element which is dragged
    draggingElement: null,
    
}

function onDragStart(event){
 draggingInfo.sourceContainerId = event.target.getAttribut("data-container");

}

const onDragOver = (e) => {
    // getting nearest parent with container class.
    // enable drop only when sourceContainer is not equal tp dropping container
    e.preventDefault();
}

const onDrop = () =>{
    alert("something dropped");
}

for(let i = 0; i < containers.length; i++){
    containers[i].addEventListener("dragover", onDragOver);
    containers[i].addEventListener("drop", onDrop);
}
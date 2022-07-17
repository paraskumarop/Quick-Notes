console.log("This is representation for a notes Taking App");
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', e => {
    let addText = document.getElementById('addText');
    let notes = localStorage.getItem('notes');
    if (notes == null) { //checks  whether there is an already present note or not
        notesObj = [];  //if no it will make the array(notesObj) empty
    }
    else {  //otherwuse
        notesObj = JSON.parse(notes);   //it will parse the note itno notesObj
        //parse is a method which takes a string and convert it to an Object
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));//stringify is the opposite of parse
    addText.value = ""; //make the card emoty after storing data
    console.log(notesObj);
    showNotes();
})
function showNotes(){
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        if(element!=""){
        html+=`
            
                <div class="notecard mx-2 my-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index+ 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id="${index}" onClick="deleteNotes(this.id)" class="btn btn-warning">Delete Note</button>
                    </div>
                </div>
        `}
        else{
            
        }
        
    });
    let noteselm=document.getElementById('notes');
    if(notesObj.length != ""){
        noteselm.innerHTML=html;
    }
    else{
        noteselm.innerHTML=`Add Notes Above,You stored nothing yet `
    }
}
//continue here for delete and getelement 
function deleteNotes(index){
    console.log("I am deleting");
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}
//search tab
let search=document.getElementById('searchTxt');
search.addEventListener('input',e=>{
    let inputval=search.value;
    console.log('Input event Fired',inputval);
    let noteCards=document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt);
        if(cardTxt.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display='none';
        }

    } )

})


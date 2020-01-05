let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

//Form Submit event
form.addEventListener('submit',addItem);

//Delete Event
itemList.addEventListener('click',remove);

//Filter Event
filter.addEventListener('keyup',filterItem);

function addItem(e){
    e.preventDefault();

    //Get Input Value
    let newItem = document.getElementById("item").value;

    //Create new li element
    let li = document.createElement("li");

    //Add Class
    li.className = 'list-group-item';

    //Add Text Node in li
    li.appendChild(document.createTextNode(newItem));

    //Create new delete btn
    let deleteBtn = document.createElement("button");
    
    //Add Class
    deleteBtn.className="btn btn-danger btn-sm float-right delete";

    //Append text node
    deleteBtn.appendChild(document.createTextNode("X"));

    //Append button to li
    li.appendChild(deleteBtn);


    //Append li to the list
    itemList.appendChild(li);


}

function remove(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are You Sure?")){
            let li = e.target.parentElement;
            itemList.removeChild(li); 
        }
    }
}

function filterItem(e){
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // Get List
    let items = document.getElementsByTagName("li");
    // Convert to an Array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
    });
}
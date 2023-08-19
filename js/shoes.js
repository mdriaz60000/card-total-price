
function handleClickBtn(target) {
 
    const itemName = target.parentNode.childNodes[1].innerText; 
    const secltetitemscontainer = document.getElementById('secleted-items') 
    const li = document.createElement('li');
    li.innerText = itemName;
    console.log(li); 
    secltetitemscontainer.appendChild(li) ;
}

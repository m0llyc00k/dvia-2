// Characters to be escaped [.*+?^${}()|[\]\\] 

function searchMan(){
    let textToSearch = "man";
    var checkBox = document.getElementById("manSearch");
    let dataset = document.getElementById("dataset");
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern = new RegExp(`${textToSearch}`,"gi");

    if (checkBox.checked == true){
        dataset.innerHTML = dataset.textContent.replace(pattern, match => `<mark>${match}</mark>`)
    } 
    
    else {
        dataset.innerHTML = dataset.textContent.replace(pattern, match => `<unmark>${match}</unmark>`)
    }
}

function searchWoman(){
    let textToSearch = "woman";
    var checkBox = document.getElementById("womanSearch");
    let dataset = document.getElementById("dataset");
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern = new RegExp(`${textToSearch}`,"gi");

    if (checkBox.checked == true){
        dataset.innerHTML = dataset.textContent.replace(pattern, match => `<mark>${match}</mark>`)
    } 
    
    else {
        dataset.innerHTML = dataset.textContent.replace(pattern, match => `<unmark>${match}</unmark>`)
    }
}

//function search(){
//    let textToSearch = document.getElementById("text-to-search").value;
//    let paragraph = document.getElementById("paragraph");
//    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

//    let pattern = new RegExp(`${textToSearch}`,"gi");

//    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
//}
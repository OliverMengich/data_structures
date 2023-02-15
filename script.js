let animals = document.querySelectorAll('.animal')
let newAnim=animals.forEach(a=>{
    if(a.lastElementChild.firstElementChild.innerHTML===true){
        return [a.firstElementChild.innerHTML, a.lastElementChild.firstElementChild.innerHTML]
    }
});
console.log(newAnim);
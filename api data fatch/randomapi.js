const loadUser =() =>{
    fetch('https://randomuser.me/api/?gender=female')

.then (res => res .json())
.then (data=>console.log (data))


}

 const displayUser = user =>{
    const gnShow = document.getElementById("shourov");
    gnShow.innerText =user.results[0].gender;
    console.log (user.results[0].gender);
    const name = user.results[0].name.first;

document.getElementById("shourov2").innerHTML = name;
   confirm.log  (user.results[0].name.first);

 }
 loadUser();

const main = document.getElementById('main')
const searchPhone = () =>{
    let input = document.getElementById("input");
     const inputValue = input.value;
    
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
    .then(res => res.json())
    .then(data=> showphone(data.data))
} 

const showphone = (data) =>{
    for(const phone of data){
        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.classList.add('mb-5')
        div.innerHTML = `
        
        <div class="card" style="width: 18rem;">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.brand}</h5>
            <p class="card-text">${phone.phone_name}</p>

        </div>
    </div>
    `
    main.appendChild(div)
    }
    
}
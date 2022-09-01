

const list = document.querySelector(".product-container"),
arr = []


fetchApi()


function fetchApi(){
    fetch("data.json").then(res=>res.json()).then(result=>{
        showData(result);
    })
};

function showData(data){
    let html = '';

    data.data.forEach((element) => {
        html += `
                <h1>${element.name}</h1>
                `
       element.productList.forEach((item,index)=>{
        html+=`<div class="product">
            <p class="name">name :${item.name}</p>
            <p class="price">price :${item.price}</p>
            <button  class="add">Add to cart</button> 
            <button class="remove">Remove to cart</button> 
        </div>`
       })
    });
    list.innerHTML = html
    const btn  = document.querySelectorAll(".add")
    Array.from(btn).forEach(ele=>{
        ele.addEventListener("click",(e)=>{
            const name = e.target.parentElement.querySelector(".name").innerHTML
            const price = e.target.parentElement.querySelector(".price").innerHTML
            arr.push({name,price})
            console.log(arr)
            console.log('Add to Cart');
            
        })
    })

    const removebtn  = document.querySelectorAll(".remove")

   Array.from(removebtn).forEach(e=>{
    e.addEventListener("click",(e)=>{
        const value = e.target.parentElement.querySelector(".name").innerHTML

        const index = arr.findIndex( (loopVariable) => loopVariable.name === value);
        arr.splice(index,1)
        console.log(arr)
        console.log('Remove to Cart');
        
    })
   })
}


 

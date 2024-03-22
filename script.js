async function getProducts() {
  let data = await fetch("https://dummyjson.com/products")
    .then((el) => el.json())
    .then((ele) => {
      return ele.products;
    });
  let MyData = ``;
  data.map((el) => {
    MyData += `
    <tr>
    <td>${el.id}</td>
    <td>${el.title}</td>
    <td>${el.price}</td>
    <td>${el.description}</td>
    <td>${el.category}</td>
    <td><img src="${el.thumbnail}"></td>
    <td>${el.images.map((ele)=>
      `<img src="${ele}"></img>`
    ).join('')}</td>
   </tr>
    
    
    `;
  });
  document.querySelector(".mytable").innerHTML = MyData;
}
getProducts();

// make  function with make($)
// const $ = (d) => {
// // make object
//   const self = {
//       element:document.querySelector(d),
//       html:()=> self.element,
//       hide:()=> self.element.style.display="none",
//       show:()=> self.element.style.display="",
//       click:(event,callback)=>self.element.addEventListener(event,callback),
//   };
// // return object
//   return self
// };

// // final result
// $('body').click('click',()=>console.log('click'))

// make a programe that reusable

const allDatas = [
  {
    id: 1,
    name: "Ak47 Gun",
    title: "New FreeFire Gun Ak47 With More Power",
    img:
      "./vector-assault-rifle-automatic-firearm-gun-logo-design-element-isolated-white-background-145921171.jpg",
    price: "$30",
  },
  {
    id: 2,
    name: "Top Python libraries",
    title: "Most Top Python libraries",
    img: "./Top-Python-Libraries.jpg",
    price: "$37",
  },
  {
    id: 3,
    name: "Vector Graphics",
    title: "Vector Graphics new most recent",
    img: "./Purple Modern Technology & Gaming Logo.png",
    price: "$20",
  },

  {
    id: 5,
    name: "new Phone Data collector",
    title: "new Phone Data collector",
    img: "./worker-construction-man-with-hammer-tool-vector-25143799.jpg",
    price: "$50",
  },
  {
    id: 6,
    name: "new Phone Data collector",
    title: "new Phone Data collector",
    img: "./Purple Modern Technology & Gaming Logo.png",
    price: "$50",
  },
];


const selectCards = document.querySelector(".cards");



window.addEventListener("DOMContentLoaded", () => {
  const makeCard = allDatas.map(
    (value, index) =>
      `<div class="card">
    <div class="name">Name: ${value.name}</div>
    <div class="title">Title: ${value.title}</div>
    <div class="img"><img src="${value.img}" width="278px" alt="${value.title}"></div>
    <div class="price">
       <div><h2>${value.price}</h2> </div> 
        <div class="addToCard"><button id="buttonAdd">Add To card</button></div>
    </div>
  </div>`
  );

  const data = makeCard.join("");
  selectCards.innerHTML = data;
});



window.addEventListener("load", () => {
  const selectBtn = document.querySelectorAll("#buttonAdd");

  initialAddItem = 0;

  const getInitialValue = document.querySelector("#initialValue");
  getInitialValue.textContent = initialAddItem;
  console.log(selectBtn);


  for(let i = 0; i <selectBtn.length; i++){
    is_click = false;
    selectBtn[i].addEventListener("click", () => {
      if (is_click === false) {
          is_click = true;
         const value = initialAddItem +=1;
          getInitialValue.textContent = value;
      }else{
        is_click = false;
        const value = initialAddItem +=1;
         getInitialValue.textContent = value;
      }
    });
  }
  
  
});

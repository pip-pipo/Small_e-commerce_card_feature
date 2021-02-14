// make  function with make($)
const $ = (d) => {
// make object
  const self = {
      element:document.querySelector(d),
      html:()=> self.element,
      hide:()=> self.element.style.display="none",
      show:()=> self.element.style.display="",
      click:(event,callback)=>self.element.addEventListener(event,callback),
  };
// return object
  return self
};

// final result
$('body').click('click',()=>console.log('click'))

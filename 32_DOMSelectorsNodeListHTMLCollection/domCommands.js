// document.getElementById('title')
// <h1 class=​"heading" id=​"title">​ DOM Learning ​</h1>​

// document.getElementById('title').id
// 'title'

// document.getElementById('title').class
// undefined

// document.getElementById('title').className
// 'heading'

// document.getElementById('title').getAttribute('id')
// 'title'

// document.getElementById('title').getAttribute('class')
// 'heading'

// document.getElementById('title').setAttribute('class','test')
// undefined

// const title = document.getElementById('title')
// undefined

// title
// <h1 class=​"test" id=​"title">​ DOM Learning ​</h1>​

// title.style.backgroundColor = 'green'
// 'green'

// title.style.padding = '15px'
// '15px'

// title.style.borderRadius = '15px'
// '15px'

// title
// <h1 class=​"test" id=​"title" style=​"background-color:​ green;​ padding:​ 15px;​ border-radius:​ 15px;​">​ DOM Learning ​</h1>​

// title.text
// undefined

// title.textContent
// '\n            DOM Learning\n        '

// title.innerHTML
// '\n            DOM Learning\n        '

// title.innerText
// 'DOM Learning'

//

// title
// <h1 class=​"heading" id=​"title">​" DOM Learning "<span>​Test Text​</span>​</h1>​

// title.innerHTML
// '\n            DOM Learning <span>Test Text</span>\n        '

// title.textContent
// '\n            DOM Learning Test Text\n        '

// title.innerText
// 'DOM Learning Test Text'

// ++++++++++++ QuerySelectors ++++++++++++++

// document.querySelector('.heading')
// <h1 class=​"heading" id=​"title">​…​</h1>​

// document.querySelector('h2')
// <h2>​Lorem ipsum dolor sit.​</h2>​

// document.querySelector('#title')
// <h1 class=​"heading" id=​"title">​…​</h1>​

// document.querySelector('input[type="password"]')
// <input type=​"password">​

//

// document.querySelector('ul')
// <ul>​…​</ul>​

// const myUl = document.querySelector('ul')
// undefined

// myUl
// <ul>​…​</ul>​

// myUl.querySelector('li')
// <li>​…​</li>​::marker​"one"</li>​

// const turnGreen= myUl.querySelector('li')
// undefined

// turnGreen.style.backgroundColor = "green"
// 'green'

// turnGreen.style.padding = "10px"
// '10px'

// turnGreen.innerText
// 'one'

// turnGreen.innerText = 'five'
// 'five'

//

//

// document.querySelectorAll('li')
// NodeList(3) [li, li, li]

// const tempList = document.querySelectorAll('li')
// undefined

// tempList
// NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: 3values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object

// tempList.length
// 3

// tempList[0]
// <li style=​"background-color:​ green;​ padding:​ 10px;​">​…​</li>​

// tempList.style.color = 'green'
// VM4570:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:22
// (anonymous) @ VM4570:1Understand this error

// tempList[0].style.color = 'green'
// 'green'

// tempList[0].style.color = 'blue'
// 'blue'

//

//

// const myH1 = document.querySelectorAll('h1')
// undefined

// myH1
// NodeList [h1#title.heading]

// myH1.style.color = 'yellow'
// VM4984:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:18
// (anonymous) @ VM4984:1Understand this error

// myH1[0].style.color = 'yellow'
// 'yellow'

//

//

// tempList.forEach((list)=>{
//     list.style.backgroundColor = "pink"
// })

//

//

// document.getElementByClassName returns HTMLCollection. Hence it is necessary to convert it into array, because it does not give any inbuild methods to iterate
// ------- Convert HTMLCollection into array --------

// document.getElementsByClassName('list-item')
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

// const tempClassList = document.getElementsByClassName('list-item')
// undefined

// Array.from(tempClassList)
// [li.list-item, li.list-item, li.list-item, li.list-item]

// const myConvertedArray = Array.from(tempClassList)
// undefined

// myConvertedArray
// [li.list-item, li.list-item, li.list-item, li.list-item]

// myConvertedArray.forEach((li)=>{
//     li.style.color='orange'
// })

//

//

// document.getElementById('firstHeading')
// <h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​…​</h1>​<span class=​"mw-page-title-main">​Brendan Eich​</span>​</h1>​

// document.getElementById('firstHeading').innerHTML =  "<h1>Akshay Palwe</h1>"
// '<h1>Akshay Palwe</h1>'

// document.getElementById('firstHeading').innerHTML =  "<h1>Akshay</h1>"
// '<h1>Akshay</h1>'

// document.querySelectorAll
// ƒ querySelectorAll() { [native code] }

// const allH2 = document.querySelectorAll('h2')
// undefined

// myH2[0].innerText
// 'Early life'

// myH2.forEach((li)=>{
//     li.style.color = "brown"
// })
// undefined

// myH2.forEach((li)=>{
//     li.style.color = "black"
// })
// undefined

// myH2.forEach((li)=>{
//     li.style.color = "black"
//     li.style.backgroundColor = 'green'
//     li.style.padding = '10px'
// })
// undefined

// myH2.forEach((li)=>{
//     li.style.color = "black"
//     li.style.backgroundColor = 'green'
//     li.style.padding = '10px'
//     li.innerText = "Akshay"
// })

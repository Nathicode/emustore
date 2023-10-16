
let data = [
    {
       name: 'በርበሬ',
       price: '1ኪሎ 350 እስከ 500 ብር',
       phonenum: '0912872953',
       img: '0nr6udltsngvkd0ojqi7r4dj73.png' ,
       type: "asp",
       res: 'berbere በርበሬ berbere'
    },
    {
        name: 'ጤፍ',
        price: '1ኪሎ 100 እስከ 200 ብር',
        phonenum: '0912872953',
        img: 'pngtree-gluten-free-teff-grain-teardrop-gluten-free-ingredient-photo-image_16233524.jpg',
        type: 'asp',
        res: 'teff ጤፍ tef'
     },
     {
        name: 'ሽንኩርት',
        price: '1ኪሎ 100 እስከ 130 ብር',
        phonenum: '0912872953',
        img: 'pngwing.com (2).png',
        type: 'asp',
        res: 'ሽንኩርት onion shnkurt'
     },
     {
        name: 'ሩዝ',
        price: '1ኪሎ 100 እስከ 110 ብር',
        phonenum: '0912872953',
        img: 'pngwing.com (3).png',
        type: 'asp',
        res: 'ruz ሩዝ'
     },
     {
        name: 'ከሰል',
        price: '1 ኩንታል 800 ብc',
        phonenum: '0912872953',
        img: 'pngwing.com (4).png',
        type: 'asp',
        res: 'ksel ከሰል'
     },
     {
        name: 'ፓስታ እና መኮረኒ',
        price: '100 ብር (1 ኪሎ / ፍሬ)',
        phonenum: '0912872953',
        img: 'pngwing.com (5).png',
        type: 'asp',
        res: 'pasta mekoreni ፓስታ እና መኮረኒ'
     },
     {
        name: 'ቡና',
        price: '1ኪሎ 350 እስከ 400 ብር',
        phonenum: '0912872953',
        img: 'pngwing.com (6).png',
        type: 'asp',
        res: 'buna ቡና'
     },
     {
        name: 'በግ ሙክት',
        price: 'ከ 10,000 እስከ 13,000 ብር',
        phonenum: '0912872953',
        img: 'pngwing.com (7).png',
        type: 'kbt',
        res: 'beg mukt በግ'
     },
     {
        name: 'በግ',
        price: 'ከ 3,000 እስከ 8,000 ብር',
        phonenum: '0912872953',
        img: 'pngwing.com (8).png',
        type: 'kbt',
        res: 'beg በግ'
     },
     {
        name: 'ፍየል',
        price: 'ከ 3,000 እስከ 12,000 ብር',
        phonenum: '0912872953',
        img: 'pngwing.com (9).png',
        type: 'kbt',
        res: 'fiyel ፍየል'
     },
     {
        name: 'በሬ',
        price: 'ከ 80,000 እስከ 150,000 ብር',
        phonenum: '0912872953',
        img: 'pngwing.com (10).png',
        type: 'kbt',
        res: 'bere በሬ'
     },
     {
        name: 'ነጭ ሽንኩርት',
        price: '1ኪሎ ከ 300 ብር እስከ 350 ብር',
        phonenum: '0912872953',
        img: 'pngwing.com (11).png',
        type: 'asp',
        res: 'nech shnkurt ነጭ ሽንኩርት'
     },
     {
        name: 'ዶሮ',
        price: 'ከ 350 እስከ 2,000 ብር',
        phonenum: '0912872953',
        img: 'pngwing.com (12).png',
        type: 'kbt',
        res: 'doro ዶሮ'
     },
     {
        name: 'መኪና',
        price: 'ከ 2 እስከ 7 ሚሊዮን ብር',
        phonenum: '0912872953',
        img: 'pngwing.com (13).png',
        type: 'mekina',
        res: 'mekina መኪና'
     },
     {
        name: 'ቤት',
        price: 'ከ 3 እስከ 10 ሚሊዮን ብር',
        phonenum: '0912872953',
        img: 'pngwing.com (14).png',
        type: 'bet',
        res: 'bet ቤት'
     },
     {
        name: 'ሽሮ',
        price: '1ኪሎ ከ 100 ብር እስከ 150 ብር',
        phonenum: '0912872953',
        img: 'pngwing.com.png',
        type: 'asp',
        res: 'shro ሽሮ'
     },
     {
        name: 'ስንዴ',
        price: '1ኪሎ ከ 90 ብር እስከ 100 ብር',
        phonenum: '0912872953',
        img: 'Wheat-PNG-Image-File.png',
        type: 'asp',
        res: 'snde ስንዴ'
     },
     {
      name: 'ወርቅ',
      price: '21ካራት ከ 3900 ብር እስከ 4000 ብር በ ግራም',
      phonenum: '0912872953',
      img: 'pngwing.com (1).png',
      type: 'werq',
      res: 'werq ወርቅ'
   },
]
/*let asb = [
   data[0],
   data[1],
   data[2],
   data[3],
   data[4],
   data[5],
   data[6]
//]*/
function useful() {
   for(i = 0; i < data.length; i++){
      let items = `<div class="items">
      <img src="${data[i].img}" alt="" class="itempic">
      <p class="itemname">${data[i].name}</p>
      <p class="price">${data[i].price}</p>
      <a href='tel:${data[i].phonenum}'>ለማዘዝ ያነጋግሩ</a>
      </div>`;
      document.querySelector('.random').innerHTML += items;
  }
}
useful();
function back() {
   document.querySelector('#h1').innerHTML = 'ለመመለስ ይጫኑ';
   document.querySelector('#h1').style.animationName = 'title'
   document.querySelector('#h1').onclick = () => {
      
      document.querySelector('.random').innerHTML = '<img src="Infinity-1s-200px.svg" id="img">';
      setTimeout(() => {
         document.querySelector('#h1').innerHTML = 'እነዚህን ይቃኙ';
         useful();
      document.querySelector('#img').style.display = 'none';
      document.querySelector('#h1').style.animationName = 'transparent';
      },1000);
      
}
}
let div = document.createElement('div');
document.querySelector('#asp').onclick = () => {
   back();
   let div = document.createElement('div');
   div.id = 'collector';
  
   for(i = 0; i < data.length; i++){
      if (data[i].type == 'asp') {
         console.log(data[i]);
         let ite = document.querySelectorAll('.items');
         ite.forEach(ite => {
            ite.remove()
         });
         let items = `<div class="items">
    <img src="${data[i].img}" alt="" class="itempic">
    <p class="itemname">${data[i].name}</p>
    <p class="price">${data[i].price}</p>
    <a href='tel:${data[i].phonenum}'>ለማዘዝ ያነጋግሩ</a>
    </div>`;
   div.innerHTML += items;
      }
   }
   document.querySelector('.random').innerHTML = '<img src="Infinity-1s-200px.svg" id="img">';
setTimeout(() => {
   document.querySelector('.random').innerHTML = div.innerHTML;
},1000)
    }
    document.querySelector('#kebt').onclick = () => {
      let div = document.createElement('div');
      div.id = 'collector';
     back();
      for(i = 0; i < data.length; i++){
         if (data[i].type == 'kbt') {
            console.log(data[i]);
            let ite = document.querySelectorAll('.items');
            ite.forEach(ite => {
               ite.remove()
            });
            let items = `<div class="items">
       <img src="${data[i].img}" alt="" class="itempic">
       <p class="itemname">${data[i].name}</p>
       <p class="price">${data[i].price}</p>
       <a href='tel:${data[i].phonenum}'>ለማዘዝ ያነጋግሩ</a>
       </div>`;
      div.innerHTML += items;
         }
      }
      document.querySelector('.random').innerHTML = '<img src="Infinity-1s-200px.svg" id="img">';
   setTimeout(() => {
      document.querySelector('.random').innerHTML = div.innerHTML;
   },1000)
       }
       document.querySelector('#bet').onclick = () => {
         let div = document.createElement('div');
         div.id = 'collector';
        back();
         for(i = 0; i < data.length; i++){
            if (data[i].type == 'bet') {
               console.log(data[i]);
               let ite = document.querySelectorAll('.items');
               ite.forEach(ite => {
                  ite.remove()
               });
               let items = `<div class="items">
          <img src="${data[i].img}" alt="" class="itempic">
          <p class="itemname">${data[i].name}</p>
          <p class="price">${data[i].price}</p>
          <a href='tel:${data[i].phonenum}'>ለማዘዝ ያነጋግሩ</a>
          </div>`;
         div.innerHTML += items;
            }
         }
         document.querySelector('.random').innerHTML = '<img src="Infinity-1s-200px.svg" id="img">';
      setTimeout(() => {
         document.querySelector('.random').innerHTML = div.innerHTML;
      },1000)
          }
          document.querySelector('#mekina').onclick = () => {
            let div = document.createElement('div');
            div.id = 'collector';
           back();
            for(i = 0; i < data.length; i++){
               if (data[i].type == 'mekina') {
                  console.log(data[i]);
                  let ite = document.querySelectorAll('.items');
                  ite.forEach(ite => {
                     ite.remove()
                  });
                  let items = `<div class="items">
             <img src="${data[i].img}" alt="" class="itempic">
             <p class="itemname">${data[i].name}</p>
             <p class="price">${data[i].price}</p>
             <a href='tel:${data[i].phonenum}'>ለማዘዝ ያነጋግሩ</a>
             </div>`;
            div.innerHTML += items;
               }
            }
            document.querySelector('.random').innerHTML = '<img src="Infinity-1s-200px.svg" id="img">';
         setTimeout(() => {
            document.querySelector('.random').innerHTML = div.innerHTML;
         },1000)
             }
             document.querySelector('#werq').onclick = () => {
               let div = document.createElement('div');
               div.id = 'collector';
              back();
               for(i = 0; i < data.length; i++){
                  if (data[i].type == 'werq') {
                     console.log(data[i]);
                     let ite = document.querySelectorAll('.items');
                     ite.forEach(ite => {
                        ite.remove()
                     });
                     let items = `<div class="items">
                <img src="${data[i].img}" alt="" class="itempic">
                <p class="itemname">${data[i].name}</p>
                <p class="price">${data[i].price}</p>
                <a href='tel:${data[i].phonenum}'>ለማዘዝ ያነጋግሩ</a>
                </div>`;
               div.innerHTML += items;
                  }
               }
               document.querySelector('.random').innerHTML = '<img src="Infinity-1s-200px.svg" id="img">';
            setTimeout(() => {
               document.querySelector('.random').innerHTML = div.innerHTML;
            },1000)
                }
    div.append(document.querySelectorAll('.items'));
console.log(div);
document.querySelector('span').onclick = () => {
   let div = document.createElement('div');
   div.id = 'result';
   let input = document.querySelector('input').value;
   
   for(i = 0; i < data.length; i++){
      let items = `<div class="items">
   <img src="${data[i].img}" alt="" class="itempic">
   <p class="itemname">${data[i].name}</p>
   <p class="price">${data[i].price}</p>
   <a href='tel:${data[i].phonenum}'>ለማዘዝ ያነጋግሩ</a>
   </div>`;
   data;
      if (data[i].res.includes(input)) {
         console.log(data[i]);
         div.innerHTML += items;
         console.log(div);
      }
      
   }
   document.querySelector('.random').innerHTML = '<img src="Infinity-1s-200px.svg" id="img">';
   setTimeout(() => {
      document.querySelector('.random').innerHTML = div.innerHTML;
   }, 2000)
}

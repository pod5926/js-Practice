import $ from 'jquery'

export default class Home {
  constructor() {
    console.log('home!!')
    $.ajax({ url: '/api/contact.php' }).then(data => {
      console.log(data)
    })
  }
}


const test = ['aaa', 'bbb', 'ccc'];

test.forEach((value, index)=> {
  console.log(`index => ${index},value => ${value}`);
  console.log(`tasu => ${index+value}`);
});


// if (window.confirm('aaa')) {
//   window.scroll(0,500)
//   // window.open('https://www.google.com/webhp?hl=ja&ictx=2&sa=X&ved=0ahUKEwjXneeEzcHxAhUcwosBHcC9CasQPQgJ')
// } else {
//   window.scroll(0,1000)

//   // window.open('https://news.google.com/topstories?hl=ja&gl=JP&ceid=JP:ja')
// }


//
  document.getElementById('js1').onclick = function () {
    // this.textContent = 'bbb';
    document.getElementById('text').textContent = 'bbb'
    console.log('ok');
  };


window.addEventListener('load', () => {

  const btn3 = document.querySelector('#js3');
  btn3.addEventListener('click', () => {

    const inputText = document.getElementById('listInput');

    if (inputText.value !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = inputText.value;
      const list = document.getElementById('js-list');
      list.appendChild(listItem);
      inputText.value = '';
    } else {
      window.alert('入力してください');
      console.log('ng');
    }
  })



  const btn2 = document.querySelector('#js2');

  btn2.addEventListener('click', () => {
    document.getElementById('text').classList.add('red')

    // 入力
    const fi = document.getElementById('freeInput').value;
    if (fi === '') {
      document.getElementById('showInput').textContent = '入力してください';
      console.log('null');
    } else {
      document.getElementById('showInput').textContent = `入力した文字：${fi}`;
      console.log('nonull');
    }
  })

  // fizzBuzz

  /*
  学ぶ前まで
  // ul作成
  const list = document.createElement('ul');
  list.classList.add('js-fizzBuzz');

  // 要素追加
  const box = document.querySelector('#fizzBuzz');
  box.append(list);

  // fizzBuzz
  for (let i = 0; i < 10; i++) {
    const num = Math.round(Math.random() * 100);
    const item = document.createElement('li');
    item.textContent = fizzBuzz(num);

    list append
    list.append(item);
  }
  console.log('ok');
}
*/

  const btn4 = document.querySelector('#js4');

  btn4.addEventListener('click', () => {
    console.log(document.getElementsByClassName('fB-list') == null);
    console.log(document.getElementsByClassName('fB-list') !== null);
    console.log(document.querySelector('.fB-list'));
    if (document.querySelector('.fB-list') == null) {
      // list create
      document.querySelector('#fizzBuzz').insertAdjacentHTML('beforeend', `<ul class='fB-list'></ul>`);
    }

      // fizzBuzz
      for (let i = 0; i < 10; i++) {
        const num = Math.round(Math.random() * 100);
        document.querySelector('.fB-list').insertAdjacentHTML('beforeend', `<li>${fizzBuzz(num)}`);
      }
      console.log('ok');
  })

  // imgchange
  document.getElementById('prev').addEventListener('click', () => {
    changeImg(-1);
  })
  document.getElementById('next').addEventListener('click', () => {
    changeImg(1);
  })
  console.log(imgList);
})

function fizzBuzz(num) {

  if (num % 3 == 0 && num % 5 == 0) {
    return (`fizzBuzz! : ${num}`);
  } else if (num % 3 == 0) {
    return (`fizz! : ${num}`);
  } else if(num % 5 == 0){
    return (`Buzz! : ${num}`);
  } else {
    return (num);
  }
}
  let count = 0;
  const imgList = [
    {
      title: 'sushi', src: './assets/images/img1.jpg', alt: 'sushi'
    },
    {
      title: 'sushi', src: './assets/images/img2.jpg', alt: 'sushi'
    },
    {
      title: 'sushi', src: './assets/images/img3.jpg', alt: 'sushi'
    },
    {
      title: 'sushi', src: './assets/images/img4.jpg', alt: 'sushi'
    },
    {
      title: 'sushi', src: './assets/images/img5.jpg', alt: 'sushi'
    }
  ];

function changeImg(num) {
  if (count + num >= 0 && count + num < imgList.length) {
    count += num;
    document.getElementById('setImg').src = imgList[count].src;
    pageNum();
  }
}

function pageNum() {
  document.getElementById('page').textContent = `${count + 1}/${imgList.length}`;
}

pageNum();
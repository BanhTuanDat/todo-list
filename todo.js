// Thêm Element
function newElement() {
    let nameList = document.getElementById('myInput').value
    let ul = document.getElementById('myUL')
    let li = document.createElement('li')
    let text = document.createTextNode(nameList)
    li.appendChild(text)
    if (nameList === '') {
      alert('Please write something!')
    } else {
      ul.appendChild(li)
    }
    nameList.value = ''
}

// Thêm class close vào từng tag li
let li = document.getElementsByTagName('li')
for (let i = 0; i < li.length; i++) {
  let span = document.createElement('span')
  let icon = document.createTextNode('x')
  span.className = 'close'
  span.appendChild(icon)
  li[i].appendChild(span)
}

// Xoá Element
let close = document.getElementsByClassName('close')
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function() {
     let div = this.parentElement
      div.style.display = 'none'
  })}

// Gạch bỏ dòng khi click vào
let list = document.querySelector('ul')
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked')
  }
})


jQuery("#test")         //不返回元素，返回 api 对象
   .addClass("class1")  //这里的 this 就是 api
   .addClass("class2")  //this 就是 api
   .addClass("class3"); //链式操作

const x1 = jQuery('#test').find('.child')
console.log(x1)
//obj.fn(p1) 函数里的 this 就是 obj
//obj.fn.call(obj,p1)


jQuery('#test')
    .find('.child')
    .addClass('red')
    .addClass('blue')
    .addClass('green')
    .end()
    .addClass('yellow')

x1.each((div) => {console.log(div)})

x1.parent().print()

jQuery('#test').children().print()


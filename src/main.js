let html = document.querySelector('#html');//通过css选择器找到这个demo
let style = document.querySelector('#style');

let n = -1;
let string = `/*你好，我是小范
*接下来我来展示一下我的前端功底
*首先加一个div
*/
#div1{
    width:200px;
    height:200px;
    border:1px solid red;
}
/*接下来，我来制作一个太极图
*首先把这个div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border:none;
}
/**太极图是阴阳形成的
 * 一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*再加两个哪吒的风火轮*/
#div1::before{
    width:100px;
    height:100px;
    left:50%;
    top:0;
    transform:translate(-50%);
    border-radius: 50%;
    background:black;
}
#div1::after{
    width:100px;
    height:100px;
    left:50%;
    bottom:0;
    transform:translate(-50%);
    border-radius: 50%;
    background:white;
}
/*再把黑轮扣两个白色的小孔
*白轮扣两个黑色的小孔
*/
#div1::before{
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{    
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
string2 = '';//缓存显示结果
// string = string.replace(/\n/g, '<br>')正则表达式
console.log(string.length)

let step = (() => {
    setTimeout(() => {
        n = n + 1;
        if (string[n] === '\n') {//如果是换行就整体改为br
            string2 += '<br>';
        }
        else if (string[n] === ' ') {
            string2 += '&nbsp;';
        }
        else {
            string2 += string[n];//如果不是换行就照搬
        }
        html.innerHTML = string2;//将string2写入到html里面

        style.innerHTML = string.substring(0, n - 2)

        window.scrollTo(0, 99999)//控制纵轴滚动条
        html.scrollTo(0, 99999)

        if (n + 1 < string.length) {
            step()
        };
    }, 50)

})
step();
vite打包后在安卓的webview里运行时报错  
const markRegex = /\bMARK:\s*(.*)$/d;   
说是d没有  
但是有时刷新的log又显示new Regex("d")，这时候点击错误进入不了代码，所以也看不到哪儿出错  

需要一个chrome扩展，需求是：
鼠标滑动到网页中的任意超链接时在超链接上方出现一个按钮，当鼠标滑到这个按钮并且点击时，用新窗口打开这个超链接。当鼠标滑出超链接并且没有滑到按钮时，按钮停留一秒就消失。



let button;

document.addEventListener('mouseover', (event) => {
const element = event.target;
if (element.tagName === 'A') {
if (!button) {
button = document.createElement('button');
button.textContent = 'Open in New Window';
button.style.cssText = `
position: absolute;
top: 0;
right: 0;
transform: translate(-50%, -50%);
padding: 5px 10px;
border: 1px solid #ccc;
cursor: pointer;
`;
document.body.appendChild(button);

      button.

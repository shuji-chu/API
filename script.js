// 找到“试一试”按钮
const tryBtn = document.getElementById('tryBtn');

// 绑定点击事件
tryBtn.addEventListener('click', function() {
    // 弹出一个输入框模拟调用
    const userInput = prompt("请输入要翻译的文本：", "你好，世界！");
    if (userInput) {
        alert("正在调用接口翻译：" + userInput + "\n\n（稍后我们接入真实 API 后就能显示结果了）");
    }
});
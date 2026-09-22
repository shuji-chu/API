// 模拟你的接口数据（以后这100个接口都放这里）
const apiList = [
    { id: 1, name: "AI 智能翻译", category: "AI", path: "/api/v1/ai/translate", method: "POST", desc: "高质量翻译服务..." },
    { id: 2, name: "天气查询", category: "生活", path: "/api/v1/weather", method: "GET", desc: "全国天气预报..." },
    { id: 3, name: "AI 绘画", category: "AI", path: "/api/v1/ai/draw", method: "POST", desc: "文生图模型..." }
];

// 切换视图函数
function showPage(pageId) {
    const mainArea = document.querySelector('.container');
    // 如果点的是首页
    if (pageId === 'home') {
        mainArea.innerHTML = `
            <div class="card">
                <div class="card-label">API 列表</div>
                <h1 class="card-title">所有接口</h1>
                <div class="feature-list">
                    ${apiList.map(api => `
                        <li onclick="showPage('api-${api.id}')">
                            <strong>${api.name}</strong> (${api.category})
                        </li>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        // 如果点的是某个接口的详细页
        const id = parseInt(pageId.split('-')[1]);
        const api = apiList.find(a => a.id === id);
        if (api) {
            mainArea.innerHTML = `
                <div class="card">
                    <div class="card-label">${api.category}</div>
                    <h1 class="card-title">${api.name}</h1>
                    <p class="card-desc">${api.desc}</p>
                    <div class="endpoint-box">
                        <div class="endpoint-header">
                            <span class="method">${api.method}</span>
                        </div>
                        <div class="endpoint-path">${api.path}</div>
                        <button class="try-btn" onclick="alert('准备接后端！')">▶ 试一试</button>
                    </div>
                    <button class="try-btn" style="background:#64748b; margin-top:10px;" onclick="showPage('home')">← 返回列表</button>
                </div>
            `;
        }
    }
}

// 启动时显示首页
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});
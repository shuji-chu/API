// 全局 Toast
function showToast(msg, type = 'info') {
    const old = document.getElementById('globalToast');
    if (old) old.remove();
    const toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${type === 'success' ? '✅' : type === 'error' ? '❌' : '💡'}</span> ${msg}`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 2500);
}

// 复制
function copyText(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => showToast('已复制到剪贴板', 'success')).catch(() => fallbackCopy(text));
    } else { fallbackCopy(text); }
}
function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); showToast('已复制到剪贴板', 'success'); } catch (err) { showToast('复制失败', 'error'); }
    document.body.removeChild(ta);
}

// 个人中心
function toggleProfileMenu(event) {
    if (event) event.stopPropagation();
    const menu = document.getElementById('profileMenu');
    if (menu) menu.classList.toggle('show');
}
document.addEventListener('click', function() {
    const menu = document.getElementById('profileMenu');
    if (menu && menu.classList.contains('show')) menu.classList.remove('show');
});

// 深色模式
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? '1' : '0');
    showToast(isDark ? '已切换到深色模式' : '已切换到浅色模式', 'info');
}
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === '1') document.body.classList.add('dark-mode');
});

// 全局按钮点击反馈
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.try-btn, .profile-item, .category-item, .tab');
    if (btn) { btn.style.transform = 'scale(0.96)'; setTimeout(() => btn.style.transform = '', 150); }
});

// 个人菜单回调
function copyMyId() { copyText('10001'); }
function logout() { showToast('需接入后端才能真退出', 'info'); }
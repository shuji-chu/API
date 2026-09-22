// ==================== 全局交互系统 ====================

// 1. 高质感 Toast 提示（代替丑陋的 alert）
function showToast(msg, type = 'info') {
    // 移除已有的
    const old = document.getElementById('globalToast');
    if (old) old.remove();

    const toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${type === 'success' ? '✅' : type === 'error' ? '❌' : '💡'}</span> ${msg}`;
    document.body.appendChild(toast);

    // 入场动画
    requestAnimationFrame(() => toast.classList.add('show'));

    // 2.5 秒后自动消失
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// 2. 全局按钮点击震动/涟漪反馈
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.try-btn, .profile-item, .category-item, .tab');
    if (btn) {
        btn.style.transform = 'scale(0.96)';
        setTimeout(() => btn.style.transform = '', 150);
    }
});

// 3. 复制到剪贴板功能（带反馈）
function copyText(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('已复制到剪贴板', 'success');
        }).catch(() => {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand('copy');
        showToast('已复制到剪贴板', 'success');
    } catch (err) {
        showToast('复制失败，请手动选择', 'error');
    }
    document.body.removeChild(ta);
}

// 4. 个人中心下拉菜单
function toggleProfileMenu(event) {
    if (event) event.stopPropagation();
    const menu = document.getElementById('profileMenu');
    if (menu) menu.classList.toggle('show');
}

document.addEventListener('click', function() {
    const menu = document.getElementById('profileMenu');
    if (menu && menu.classList.contains('show')) {
        menu.classList.remove('show');
    }
});

// 5. 深色模式切换（带本地保存）
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? '1' : '0');
    showToast(isDark ? '已切换到深色模式' : '已切换到浅色模式', 'info');
}

// 页面加载时读取深色模式偏好
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === '1') {
        document.body.classList.add('dark-mode');
    }
});
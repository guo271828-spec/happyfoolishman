// 页面导航功能
let timeInterval;

function goToPage1() {
    // 停止时间更新
    if (timeInterval) {
        clearInterval(timeInterval);
    }
    document.getElementById('cover').classList.add('hidden');
    document.getElementById('page1').classList.remove('hidden');
}

function goToPage2() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
}

function goBack() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    
    if (!page2.classList.contains('hidden')) {
        page2.classList.add('hidden');
        page1.classList.remove('hidden');
    } else if (!page1.classList.contains('hidden')) {
        page1.classList.add('hidden');
        document.getElementById('cover').classList.remove('hidden');
        // 重新开始时间更新
        updateRealTime();
        timeInterval = setInterval(updateRealTime, 1000);
    }
}

// 显示实时时间
function updateRealTime() {
    const now = new Date();
    const formattedDate = now.getFullYear() + '年' + 
                         padZero(now.getMonth() + 1) + '月' + 
                         padZero(now.getDate()) + '日 ' + 
                         padZero(now.getHours()) + ':' + 
                         padZero(now.getMinutes()) + ':' + 
                         padZero(now.getSeconds());
    
    document.getElementById('transferTime').textContent = formattedDate;
    document.getElementById('receiveTime').textContent = formattedDate;
}

// 数字补零
function padZero(num) {
    return num < 10 ? '0' + num : num;
}

// 初始化时间并每秒更新
updateRealTime();
timeInterval = setInterval(updateRealTime, 1000);

// 封面点击进入功能
document.querySelector('.receipt-container').addEventListener('click', goToPage1);

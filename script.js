// 页面导航功能
function goToPage1() {
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
    }
}

// 封面点击进入功能
document.getElementById('coverImage').addEventListener('click', goToPage1);

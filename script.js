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

// 自定义图片功能
function customizeCover() {
    document.getElementById('coverFile').click();
}

function customizePage1() {
    document.getElementById('page1File').click();
}

function customizePage2() {
    document.getElementById('page2File').click();
}

// 处理文件上传
function handleFileUpload(fileInputId, imageId) {
    const fileInput = document.getElementById(fileInputId);
    const image = document.getElementById(imageId);
    
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                image.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
}

// 初始化文件上传处理
handleFileUpload('coverFile', 'coverImage');
handleFileUpload('page1File', 'page1Image');
handleFileUpload('page2File', 'page2Image');

// 封面点击进入功能
document.querySelector('.cover-content h1').addEventListener('click', goToPage1);
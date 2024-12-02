// script.js

// 获取返回顶部按钮
const backToTopButton = document.getElementById('back-to-top');

// 当用户向下滚动 100px 时，显示返回顶部按钮
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// 当用户点击返回顶部按钮时，滚动到页面顶部
backToTopButton.addEventListener('click', function() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
});

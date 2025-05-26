// misc.js

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('photo-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.modal-close');

    // 检查模态框的基本元素是否存在
    if (modal && modalImg && closeBtn) {
        document.querySelectorAll('.photo-frame img, .intro-photo').forEach(img => {
            img.addEventListener('click', function () {
                modal.style.display = "block";
                modalImg.src = this.src; 
            });
        });

        closeBtn.onclick = function () {
            modal.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    } else {
        console.warn("Modal elements (#photo-modal, #modal-img, .modal-close) not all found. Image click functionality might be affected. Ensure these elements exist in your HTML.");
    }
});

// --- 菜单切换代码修改开始 ---
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

// 只有当 menuToggle 和 navLinks 元素都存在时，才为它们添加事件监听器
if (menuToggle && navLinks) { 
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
} else {
    // (可选) 如果你想在控制台看到这些元素是否被找到，可以取消下面这行注释
    // console.log("Menu toggle elements (#menu-toggle or .nav-links) not found on this page (this is okay if this page doesn't have the main menu toggle).");
}
// --- 菜单切换代码修改结束 ---
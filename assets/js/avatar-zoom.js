document.addEventListener('DOMContentLoaded', function () {
  var avatar = document.getElementById('profile-avatar');
  var modal = document.getElementById('avatar-modal');
  var modalImg = document.getElementById('avatar-modal-image');

  if (!avatar || !modal || !modalImg) return;

  // 点击头像：打开大图
  avatar.addEventListener('click', function () {
    modalImg.src = avatar.src;
    modal.classList.add('is-active');
  });

  // 点击遮罩或大图：关闭
  modal.addEventListener('click', function () {
    modal.classList.remove('is-active');
  });
});
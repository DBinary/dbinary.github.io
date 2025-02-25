---
layout: archive
title: "Miscellaneous"
permalink: /misc/
author_profile: true
---

<div class="carousel-container">
  <div class="carousel-slider">
    <div class="carousel-item">
      <img src="../images/csu_2103.jpg" alt="CSU, 2021" />
      <div class="caption">When visiting Central South University as an exchange student...</div>
    </div>
    <div class="carousel-item">
      <img src="../images/ustb_graduation.png" alt="USTB,2024" />
      <div class="caption">Graduating from University of Science and Technology Beijing.</div>
    </div>
    <div class="carousel-item">
      <img src="../images/westlake_bar.jpg" alt="Westlake Bar" />
      <div class="caption">'Westlake Bar', nice to meet the gifted youngs.</div>
    </div>
    <div class="carousel-item">
      <img src="../images/PEBBLE_2024.jpg" alt="PEBBLE 2024" />
      <div class="caption">I am honored to serve as a teaching assistant...</div>
    </div>
  </div>

  <div class="carousel-dots">
    <span class="dot active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</div>

<script>
  const slider = document.querySelector('.carousel-slider');
  const dots = document.querySelectorAll('.dot');
  const items = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;
  let autoScrollInterval;

  // 自动滚动
  function autoScroll() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }

  // 启动自动滚动
  function startAutoScroll() {
    autoScrollInterval = setInterval(autoScroll, 10000); // 每10秒切换一次
  }

  // 停止自动滚动
  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  // 更新轮播位置
  function updateCarousel() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.remove('active');
      if (index === currentIndex) {
        dot.classList.add('active');
      }
    });
  }

  // 点击圆点
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
      stopAutoScroll();
      startAutoScroll();
    });
  });

  // 初始化
  startAutoScroll();
</script>

<style>
  .carousel-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 50vh; /* 设置为视口高度的50%，确保图片完整显示 */
  }

  .carousel-slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .carousel-item {
    min-width: 100%; /* 每张图片占据100%的宽度 */
    flex: 0 0 auto;
    height: 100%; /* 确保每张图片高度与容器一致 */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-item img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
    display: block;
  }

  .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .carousel-item:hover .caption {
    opacity: 1;
  }

  .carousel-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }

  .dot {
    width: 10px;
    height: 10px;
    background-color: gray;
    border-radius: 50%;
    cursor: pointer;
  }

  .dot.active {
    background-color: black;
  }
</style>
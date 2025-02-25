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
  const itemWidth = items[0].offsetWidth;
  let currentIndex = 0;
  let autoScrollInterval;

  // 自动滚动
  function autoScroll() {
    currentIndex++;
    if (currentIndex >= items.length) {
      currentIndex = 0;
    }
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
    slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
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
  }

  .carousel-slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .carousel-item {
    min-width: 100%;
    flex: 0 0 auto;
    position: relative;
  }

  .carousel-item img {
    width: 100%;
    height: auto;
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

  /* 确保页面宽度能够适应图片 */
  .carousel-container {
    max-width: 100%;
  }

  .carousel-slider {
    width: 100vw; /* 确保滑动条占据全屏宽度 */
  }

  .carousel-item {
    width: 100vw; /* 每张图片占据全屏宽度 */
  }
</style>
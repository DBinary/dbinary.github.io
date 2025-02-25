---
layout: archive
title: "Miscellaneous"
permalink: /misc/
author_profile: true
---

<div id="scroll-container">
  <div class="scroll-item">
    <img src="../images/csu_2103.jpg" alt="CSU, 2021" />
    <div class="caption">When visiting Central South University as an exchange student...</div>
  </div>
  <div class="scroll-item">
    <img src="../images/ustb_graduation.png" alt="USTB,2024" />
    <div class="caption">Graduating from University of Science and Technology Beijing.</div>
  </div>
  <div class="scroll-item">
    <img src="../images/westlake_bar.jpg" alt="Westlake Bar" />
    <div class="caption">'Westlake Bar', nice to meet the gifted youngs.</div>
  </div>
  <div class="scroll-item">
    <img src="../images/PEBBLE_2024.jpg" alt="PEBBLE 2024" />
    <div class="caption">I am honored to serve as a teaching assistant...</div>
  </div>
</div>

<button id="prev-btn">Previous</button>
<button id="next-btn">Next</button>

<script>
  const scrollContainer = document.getElementById('scroll-container');
  const scrollItems = document.querySelectorAll('.scroll-item');
  const itemWidth = scrollItems[0].offsetWidth;
  let scrollPosition = 0;

  // 自动滚动图片
  let autoScrollInterval;

  function autoScroll() {
    scrollPosition -= itemWidth;
    scrollContainer.style.transform = `translateX(${scrollPosition}px)`;
    if (Math.abs(scrollPosition) >= itemWidth * (scrollItems.length - 1)) {
      scrollPosition = 0;
    }
  }

  // 启动自动滚动
  function startAutoScroll() {
    autoScrollInterval = setInterval(autoScroll, 3000); // 每3秒滚动一次
  }

  // 停止自动滚动
  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  scrollContainer.addEventListener('mouseenter', () => {
    stopAutoScroll();
  });

  scrollContainer.addEventListener('mouseleave', () => {
    startAutoScroll();
  });

  // 手动滚动
  document.getElementById('next-btn').addEventListener('click', function() {
    autoScroll();
  });

  document.getElementById('prev-btn').addEventListener('click', function() {
    scrollPosition += itemWidth;
    scrollContainer.style.transform = `translateX(${scrollPosition}px)`;
    if (scrollPosition >= 0) {
      scrollPosition = -itemWidth * (scrollItems.length - 1);
    }
  });

  // 初始化
  startAutoScroll();
</script>

<style>
  #scroll-container {
    display: flex;
    width: 100%;
    overflow: hidden;
    position: relative;
    transition: transform 0.5s ease-in-out;
  }

  .scroll-item {
    min-width: 100%;
    flex: 0 0 auto;
    position: relative;
  }

  .scroll-item img {
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

  .scroll-item:hover .caption {
    opacity: 1;
  }

  button {
    margin: 10px;
    padding: 5px 10px;
    cursor: pointer;
  }
</style>
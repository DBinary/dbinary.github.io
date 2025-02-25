---
layout: archive
title: "Miscellaneous"
permalink: /misc/
author_profile: true
---

<div class="scroll-container">
  <div class="scroll-item">
    <img src="../images/csu_2103.jpg" alt="CSU, 2021" title="When visiting Central South University as an exchange student in Fall 2021, I was honored and pleased to become the header student of Class 2103 at School of Automation." />
  </div>
  <div class="scroll-item">
    <img src="../images/ustb_graduation.png" alt="USTB,2024" title="Graduating from University of Science and Technology Beijing." />
  </div>
  <div class="scroll-item">
    <img src="../images/westlake_bar.jpg" alt="Westlake Bar" title="'Westlake Bar', nice to meet the gifted youngs." />
  </div>
  <div class="scroll-item">
    <img src="../images/PEBBLE_2024.jpg" alt="PEBBLE 2024" title="I am honored to serve as a teaching assistant for PEBBLE BioFusion summer camp in 2024. Our team has enjoyed a truly wonderful experience together." />
  </div>
</div>

<script>
  // 控制滚动栏
  let scrollPosition = 0;
  const container = document.querySelector('.scroll-container');
  const items = document.querySelectorAll('.scroll-item');
  const itemWidth = items[0].offsetWidth;

  // 滚动到下一张图片
  function scrollRight() {
    scrollPosition -= itemWidth;
    container.style.transform = `translateX(${scrollPosition}px)`;
  }

  // 滚动到上一张图片
  function scrollLeft() {
    scrollPosition += itemWidth;
    container.style.transform = `translateX(${scrollPosition}px)`;
  }

  // 添加鼠标悬停事件
  items.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const title = this.querySelector('img').title;
      alert(title); // 或者用其他方式显示，例如悬浮提示框
    });
  });
</script>

<style>
  .scroll-container {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 10px;
    scroll-snap-type: x mandatory;
  }

  .scroll-item {
    flex: 0 0 auto;
    width: 100%;
    scroll-snap-align: start;
    margin-right: 10px;
    position: relative;
  }

  .scroll-item img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  .scroll-item::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .scroll-item:hover::before {
    opacity: 1;
  }
</style>
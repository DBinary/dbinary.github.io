---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<style>
  :root {
    --r-black: #1a1a1a;
    --r-blue: #0969da;
    --r-orange: #f97316;
    --r-gray: #888;
  }

  .research-section {
    margin-bottom: 2.5rem;
  }
  .research-section h2 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--r-black);
    margin: 0 0 1rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--r-black);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .research-section.current h2 {
    border-bottom-color: var(--r-blue);
  }
  .research-section.past h2 {
    border-bottom-color: var(--r-orange);
  }
  .section-badge {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .research-section.current .section-badge {
    background: var(--r-blue);
  }
  .research-section.past .section-badge {
    background: var(--r-orange);
  }

  .research-timeline {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  .research-timeline li {
    position: relative;
    padding-left: 1.5rem;
    padding-bottom: 1.5rem;
    border-left: 2px solid #d6d6d6;
  }
  .research-timeline li:last-child {
    padding-bottom: 0;
  }
  .research-timeline li::before {
    content: "";
    position: absolute;
    left: -6px;
    top: 0.35rem;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--r-black);
    border: 2px solid #fff;
    box-shadow: 0 0 0 1px #d6d6d6;
  }
  .research-section.current .research-timeline li::before {
    background: var(--r-blue);
  }
  .research-section.past .research-timeline li::before {
    background: var(--r-orange);
  }

  .research-institution {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 1rem;
    color: var(--r-black);
    margin-bottom: 0.15rem;
  }
  .research-institution img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    border-radius: 3px;
  }
  .research-institution a {
    color: var(--r-black);
    text-decoration: none;
  }
  .research-institution a:hover {
    color: var(--r-blue);
    text-decoration: underline;
  }
  .research-role {
    font-size: 0.95rem;
    color: #333;
    line-height: 1.4;
  }
  .research-role a {
    color: var(--r-blue);
    text-decoration: none;
  }
  .research-role a:hover {
    color: var(--r-orange);
    text-decoration: underline;
  }
  .research-meta {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--r-black);
    margin-top: 0.25rem;
  }
</style>

<div class="research-section current">
  <h2><span class="section-badge"></span> Current</h2>
  <ul class="research-timeline">
    <li>
      <div class="research-institution">
        <img src="../images/westlake_logo.png" alt="Westlake University">
        <a href="https://www.westlake.edu.cn/" target="_blank">Westlake University</a>
      </div>
      <div class="research-role">Ph.D. Training, advised by Prof. <a href="https://en.westlake.edu.cn/faculty/jianyang-zeng.html" target="_blank">Jianyang Zeng</a></div>
      <div class="research-meta">2023.07 – Present</div>
    </li>
    <li>
      <div class="research-institution">
        <a href="https://www.westlake.edu.cn/" target="_blank">Westlake University</a>
      </div>
      <div class="research-role">Ph.D. Student Rotation Program and Training, advised by Prof. <a href="https://en.westlake.edu.cn/faculty/hongtao-yu.html" target="_blank">Hongtao Yu</a></div>
      <div class="research-meta">2023.11 – Present</div>
    </li>
  </ul>
</div>

<div class="research-section past">
  <h2><span class="section-badge"></span> Past Rotations & Internships</h2>
  <ul class="research-timeline">
    <li>
      <div class="research-institution">
        <a href="https://www.westlake.edu.cn/" target="_blank">Westlake University</a>
      </div>
      <div class="research-role">Ph.D. Student Rotation Program, advised by Prof. <a href="https://www.westlake.edu.cn/faculty/jian-yang.html" target="_blank">Jian Yang</a></div>
      <div class="research-meta">2023.10 – 2023.11</div>
    </li>
    <li>
      <div class="research-institution">
        <a href="https://www.westlake.edu.cn/" target="_blank">Westlake University</a>
      </div>
      <div class="research-role">Ph.D. Student Rotation Program, advised by Prof. <a href="https://www.westlake.edu.cn/faculty/yanmei-dou.html" target="_blank">Yanmei Dou</a></div>
      <div class="research-meta">2023.09 – 2023.10</div>
    </li>
    <li>
      <div class="research-institution">
        <img src="../images/tsinghua.jpg" alt="Tsinghua University">
        <a href="https://www.tsinghua.edu.cn/" target="_blank">Tsinghua University</a>
      </div>
      <div class="research-role">Research Intern at <a href="https://air.tsinghua.edu.cn/" target="_blank">AIR</a>, advised by Prof. <a href="https://air.tsinghua.edu.cn/info/1046/1203.htm" target="_blank">Zaiqing Nie</a> and Postdoc <a href="https://air.tsinghua.edu.cn/airtd/bsh.htm" target="_blank">Yushuai Wu</a></div>
      <div class="research-meta">2023.03 – 2023.07</div>
    </li>
    <li>
      <div class="research-institution">
        <img src="../images/ustb.png" alt="University of Science and Technology Beijing">
        <a href="http://en.ustb.edu.cn/" target="_blank">University of Science and Technology Beijing</a>
      </div>
      <div class="research-role">Research Intern at <a href="http://huasheng.ustb.edu.cn/" target="_blank">112Lab</a>, advised by Prof. <a href="http://huasheng.ustb.edu.cn/shiziduiwu/jiaoshixinxi/2020-06-10/244.html" target="_blank">Hongwu Du</a> and Ph.D. Student <a href="https://github.com/Starlitnightly" target="_blank">Zehua Zeng</a></div>
      <div class="research-meta">2021.11 – 2023.08</div>
    </li>
    <li>
      <div class="research-institution">
        <img src="../images/ucas.jpg" alt="Chinese Academy of Sciences">
        <a href="http://www.apm.cas.cn" target="_blank">Chinese Academy of Sciences</a>
      </div>
      <div class="research-role">Research Intern at <a href="http://www.apm.cas.cn" target="_blank">APM</a>, advised by Prof. <a href="https://people.ucas.edu.cn/~linfuchun" target="_blank">Fuchun Lin</a></div>
      <div class="research-meta">2021.07 – 2022.07</div>
    </li>
    <li>
      <div class="research-institution">
        <img src="../images/ustb.png" alt="University of Science and Technology Beijing">
        <a href="http://en.ustb.edu.cn/" target="_blank">University of Science and Technology Beijing</a>
      </div>
      <div class="research-role">Research Intern at <a href="https://metall.ustb.edu.cn/" target="_blank">Metall</a>, advised by Associate Professor <a href="https://metall.ustb.edu.cn/szdw/jsjs/83d7b380b378434f83e47d12040d40c4.htm" target="_blank">Rongbin Li</a></div>
      <div class="research-meta">2020.09 – 2021.09</div>
    </li>
  </ul>
</div>

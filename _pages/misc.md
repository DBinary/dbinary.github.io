---
layout: archive
title: "Miscellaneous"
permalink: /misc/
author_profile: true
page_specific_css: /_pages/misc_style.css
---

## 📷 Gallery Wall

### 🎓 Graduation Moments

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">USTB Graduation 2024</div><img src='../images/ustb_graduation_1.png' alt="USTB Graduation 2024" width="150%" style="cursor: pointer;" onclick="openModal(this)"></div></div>
<div class='paper-box-text' markdown="1">
A memorable moment from my graduation ceremony at University of Science and Technology Beijing. This represents the culmination of years of hard work and dedication to my studies.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">USTB Celebration 2024</div><img src='../images/ustb_graduation_2.jpg' alt="USTB Graduation Celebration" width="150%" style="cursor: pointer;" onclick="openModal(this)"></div></div>
<div class='paper-box-text' markdown="1">
Celebrating academic achievements with friends and classmates. These moments of shared joy and accomplishment are what make the academic journey truly special.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">USTB Memories 2024</div><img src='../images/ustb_graduation_4.jpg' alt="USTB Graduation Memories" width="150%" style="cursor: pointer;" onclick="openModal(this)"></div></div>
<div class='paper-box-text' markdown="1">
Capturing the joy of completing my studies at USTB. The graduation ceremony was a perfect conclusion to an important chapter of my academic life.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">USTB Graduation 2023</div><img src='../images/ustb_graduation_3.jpg' alt="USTB Graduation 2023" width="150%" style="cursor: pointer;" onclick="openModal(this)"></div></div>
<div class='paper-box-text' markdown="1">
An earlier graduation moment from my academic journey. Each graduation represents growth and new beginnings in my educational path.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">SXU Campus 2023</div><img src='../images/SXU_2023.jpg' alt="Shanxi University" width="150%" style="cursor: pointer;" onclick="openModal(this)"></div></div>
<div class='paper-box-text' markdown="1">
Academic activities and memories from my time at SXU. The beautiful campus provided an inspiring environment for learning and research.
</div>
</div>

### 👨‍🏫 Teaching Assistant Experience

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">PEBBLE Summer Campus 2024</div><img src='../images/PEBBLE_2024_1.jpg' alt="PEBBLE TA Experience" width="150%" style="cursor: pointer;" onclick="openModal(this)"></div></div>
<div class='paper-box-text' markdown="1">
Teaching and mentoring students at the PEBBLE summer program in Hangzhou. This was an incredible opportunity to share knowledge and guide the next generation of researchers.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">PEBBLE Teaching 2024</div><img src='../images/PEBBLE_2024_2.jpg' alt="PEBBLE Teaching" width="150%" style="cursor: pointer;" onclick="openModal(this)"></div></div>
<div class='paper-box-text' markdown="1">
Engaging with students and sharing knowledge during the summer campus program. The interactive learning environment fostered great discussions and academic growth.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">PEBBLE Collaboration 2024</div><img src='../images/PEBBLE_2024_3.jpg' alt="PEBBLE Collaboration" width="150%" style="cursor: pointer;" onclick="openModal(this)"></div></div>
<div class='paper-box-text' markdown="1">
Collaborative learning moments with participants from the summer school. Working together with students from diverse backgrounds enriched the teaching experience.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">PEBBLE Connections 2024</div><img src='../images/PEBBLE_2024_4.jpg' alt="PEBBLE Connections" width="150%" style="cursor: pointer;" onclick="openModal(this)"></div></div>
<div class='paper-box-text' markdown="1">
Building connections with students and fellow teaching assistants. The program created lasting academic relationships and friendships.
</div>
</div>

### 👥 Friends and Memories

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CSU Class 2103 2022</div><img src='../images/csu_2103.jpg' alt="Central South University Friends" width="150%" style="cursor: pointer;" onclick="openModal(this)"></div></div>
<div class='paper-box-text' markdown="1">
Cherished moments with classmates during my time at CSU. The bonds formed during university years create lifelong friendships and academic collaborations.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Westlake Friends 2024</div><img src='../images/westlake_bar.jpg' alt="Westlake University Friends" width="150%" style="cursor: pointer;" onclick="openModal(this)"></div></div>
<div class='paper-box-text' markdown="1">
Enjoying time with research colleagues and friends at Westlake University. These social moments provide balance to the rigorous academic life and foster collaborative relationships.
</div>
</div>

<div id="photo-modal" class="modal">
  <span class="modal-close">&times;</span>
  <img class="modal-content" id="modal-img">
</div>

<script src="/_pages/misc.js"></script>
<script>
function openModal(img) {
    const modal = document.getElementById('photo-modal');
    const modalImg = document.getElementById('modal-img');
    if (modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = img.src;
    }
}

// Ensure modal close functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('photo-modal');
    const closeBtn = document.querySelector('.modal-close');

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };
    }

    if (modal) {
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }
});
</script>
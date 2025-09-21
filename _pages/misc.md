---
layout: archive
title: "Miscellaneous"
permalink: /misc/
author_profile: true
page_specific_css: /_pages/misc_style.css
---

## 📷 Gallery Wall

### 🎓 Graduation Moments

<div class='mics-box'><div class='mics-box-image'><div><div class="badge">USTB Graduation</div><img src='../images/ustb_graduation_1.png' alt="USTB Graduation 2024" onclick="openModal(this)"></div></div>
<div class='mics-box-text' markdown="1">
📅: June, 2024<br>

🧑: Me and my friends of Class 2024 of School of Advanced Engineering<br>

📍: University of Science and Technology Beijing, Beijing, China
</div>
</div>

<div class='mics-box'><div class='mics-box-image'><div><div class="badge">USTB Graduation</div><img src='../images/ustb_graduation_2.jpg' alt="USTB Graduation Celebration" onclick="openModal(this)"></div></div>
<div class='mics-box-text' markdown="1">
📅: June, 2024<br>

🧑: Me and my friends of the same undergraduate laboratory<br>

📍: University of Science and Technology Beijing, Beijing, China
</div>
</div>

<div class='mics-box'><div class='mics-box-image'><div><div class="badge">USTB Graduation</div><img src='../images/ustb_graduation_4.jpg' alt="USTB Graduation Memories" onclick="openModal(this)"></div></div>
<div class='mics-box-text' markdown="1">
📅: June, 2024<br>

🧑: Me<br>

📍: University of Science and Technology Beijing, Beijing, China
</div>
</div>

<div class='mics-box'><div class='mics-box-image'><div><div class="badge">USTB Graduation</div><img src='../images/ustb_graduation_3.jpg' alt="USTB Graduation 2023" onclick="openModal(this)"></div></div>
<div class='mics-box-text' markdown="1">
📅: June, 2023<br>

🧑: The president of USTB and me <br>

📍: University of Science and Technology Beijing, Beijing, China
</div>
</div>

<div class='mics-box'><div class='mics-box-image'><div><div class="badge">Shanxi University 2023</div><img src='../images/SXU_2023.jpg' alt="Shanxi University" onclick="openModal(this)"></div></div>
<div class='mics-box-text' markdown="1">
📅: June, 2023<br>

🧑: Me and my friends <br>

📍: Shanxi University, Taiyuan, Shanxi Province, China
</div>
</div>

### 👨‍🏫 Teaching Assistant Experience

<div class='mics-box'><div class='mics-box-image'><div><div class="badge">PEBBLE Summer Campus 2024</div><img src='../images/PEBBLE_2024_1.jpg' alt="PEBBLE TA Experience" onclick="openModal(this)"></div></div>
<div class='mics-box-text' markdown="1">
📅: August, 2024<br>

🧑: Me (TA) and my friends of the PEBBLE summer campus <br>

📍: Huzhou, Zhejiang Province, China
</div>
</div>


<div class='mics-box'><div class='mics-box-image'><div><div class="badge">PEBBLE Summer Campus 2024</div><img src='../images/PEBBLE_2024_2.jpg' alt="PEBBLE Teaching" onclick="openModal(this)"></div></div>
<div class='mics-box-text' markdown="1">
📅: August, 2024<br>

🧑: Me (TA) and my friends of the PEBBLE summer campus <br>

📍: Westlake University, Hangzhou, Zhejiang Province, China
</div>
</div>

<div class='mics-box'><div class='mics-box-image'><div><div class="badge">PEBBLE Summer Campus 2024</div><img src='../images/PEBBLE_2024_3.jpg' alt="PEBBLE Collaboration" onclick="openModal(this)"></div></div>
<div class='mics-box-text' markdown="1">
📅: August, 2024<br>

🧑: Me (TA) and my friends of the PEBBLE summer campus <br>

📍: Shaoxing, Zhejiang Province, China
</div>
</div>


<div class='mics-box'><div class='mics-box-image'><div><div class="badge">PEBBLE Connections 2024</div><img src='../images/PEBBLE_2024_4.jpg' alt="PEBBLE Connections" onclick="openModal(this)"></div></div>
<div class='mics-box-text' markdown="1">
📅: August, 2024<br>

🧑: Me (TA) and my friends of the PEBBLE summer campus <br>

📍: Shaoxing, Zhejiang Province, China
</div>
</div>

### 👥 Friends and Memories

<div class='mics-box'><div class='mics-box-image'><div><div class="badge">CSU Class 2103 2022</div><img src='../images/csu_2103.jpg' alt="Central South University Friends" onclick="openModal(this)"></div></div>
<div class='mics-box-text' markdown="1">
📅: January, 2022<br>

🧑: Me and my friends of the Class 2103 of Automation and Electrical Appliances (Central South University, School of Automation). <br>

📍: Central South University, Changsha, Hunan Province, China
</div>
</div>

<div class='mics-box'><div class='mics-box-image'><div><div class="badge">Westlake Friends 2024</div><img src='../images/westlake_bar.jpg' alt="Westlake University Friends" onclick="openModal(this)"></div></div>
<div class='mics-box-text' markdown="1">
📅: June, 2024<br>

🧑: Me and my friends (Peng Liu and Zhaorui Jiang). <br>

📍: Westlake University, Hangzhou, Zhejiang Province, China
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
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .slider {
            width: 100%;
            max-width: 600px; /* Adjust the width as needed */
            margin: auto;
            overflow: hidden;
            position: relative;
        }

        .slides {
            display: flex;
            width: 400%; /* 4 slides */
            transition: transform 0.5s ease;
        }

        .slide {
            width: 25%; /* Each slide takes up 25% of the container */
            flex-shrink: 0;
            position: relative;
        }

        .slide img {
            width: 100%;
            height: auto;
            display: block;
        }

        .caption {
            position: absolute;
            bottom: 10px;
            left: 10px;
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 5px;
            border-radius: 3px;
            opacity: 0; /* Hide caption initially */
            transition: opacity 0.3s; /* Smooth transition for showing/hiding caption */
        }
        .slide:hover .caption {
            opacity: 1; /* Show caption on hover */
        }

        .navigation-manual {
            position: absolute;
            width: 100%;
            margin-top: -50px;
            display: flex;
            justify-content: center;
            list-style: none;
        }

        .manual-btn {
            border: 2px solid #40D3DC;
            padding: 5px;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.5s;
        }

        .manual-btn:not(:last-child) {
            margin-right: 40px;
        }

        .manual-btn:hover {
            background-color: #40D3DC;
        }
    </style>
</head>
<body>

<div class="slider">
    <div class="slides">
        <div class="slide">
            <img src="../images/csu_2103.jpg" alt="Image 1">
            <div class="caption">When visiting Central South University as an exchange student in Fall 2021, I was honored and pleased to become the header student of Class 2103 at School of Automation.</div>
        </div>
        <div class="slide">
            <img src="../images/ustb_graduation.png" alt="Image 2">
            <div class="caption">Graduating from University of Science and Technology Beijing.</div>
        </div>
        <div class="slide">
            <img src="../images/westlake_bar.jpg" alt="Image 3">
            <div class="caption">'Westlake Bar', nice to meet the gifted youngs.</div>
        </div>
        <div class="slide">
            <img src="../images/PEBBLE_2024.jpg" alt="Image 4">
            <div class="caption">Teaching assistant for PEBBLE BioFusion summer camp.</div>
        </div>
    </div>
    <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>
    </div>
    <input type="radio" name="radio-btn" id="radio1" checked>
    <input type="radio" name="radio-btn" id="radio2">
    <input type="radio" name="radio-btn" id="radio3">
    <input type="radio" name="radio-btn" id="radio4">
</div>

<script>
    let index = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const delay = 3000; // Change image every 3 seconds

    function showSlide(index) {
        const slidesContainer = document.querySelector('.slides');
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    showSlide(index);

    function nextSlide() {
        index = (index + 1) % totalSlides;
        showSlide(index);
    }

    const interval = setInterval(nextSlide, delay);

    // Handle manual navigation
    document.querySelectorAll('.manual-btn').forEach((btn, i) => {
        btn.onclick = function() {
            clearInterval(interval); // Stop auto play when manual navigation happens
            index = i;
            showSlide(index); // Go to the slide
            setTimeout(() => {
                interval = setInterval(nextSlide, delay); // Restart auto play after a while
            }, delay);
        };
    });
</script>
</body>
</html>
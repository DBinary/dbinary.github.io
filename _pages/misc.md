---
layout: archive
title: "Miscellaneous"
permalink: /misc/
author_profile: true
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <style>
        .swiper-container {
            width: 100%;
            height: 400px;
            position: relative;
        }
        .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            cursor: pointer;
        }
        .swiper-slide img {
            width: 100%;
            height: auto;
        }
        .caption {
            position: absolute;
            bottom: 10px;
            left: 10px;
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 5px;
            border-radius: 3px;
            display: none;
        }
    </style>
</head>
<body>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../images/csu_2103.jpg" alt="Image 1">
                <div class="caption">When visiting Central South University as an exchange student in Fall 2021, I was honored and pleased to become the header student of Class 2103 at School of Automation.</div>
            </div>
            <div class="swiper-slide">
                <img src="../images/ustb_graduation.png" alt="Image 2">
                <div class="caption">Graduating from University of Science and Technology Beijing.</div>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Navigation -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>

    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
        function toggleCaption(element) {
            const caption = element.querySelector('.caption');
            if (caption.style.display === 'none' || caption.style.display === '') {
                caption.style.display = 'block';
            } else {
                caption.style.display = 'none';
            }
        }

        var swiper = new Swiper('.swiper-container', {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    </script>
</body>
</html>

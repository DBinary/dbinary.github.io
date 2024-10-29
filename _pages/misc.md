---
layout: archive
title: "Miscellaneous"
permalink: /misc/
author_profile: true
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <style>
        .swiper-container {
            width: 100%;
            height: 60vh; /* Adjust the height as needed */
            position: relative;
            margin-top: 3vh; /* Push the gallery lower on the page */
        }
        .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            cursor: pointer;
            overflow: hidden; /* Ensure images fit within the slide */
        }
        .swiper-slide img {
            width: 100%;
            height: 100%;
            object-fit: cover; /* Maintain aspect ratio */
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
        .swiper-slide:hover .caption {
            opacity: 1; /* Show caption on hover */
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
            <div class="swiper-slide">
                <img src="../images/westlake_bar.jpg" alt="Image 3">
                <div class="caption">'Westlake Bar', nice to meet the gifted youngs.</div>
            </div>
            <div class="swiper-slide">
                <img src="../images/PEBBLE_2024.jpg" alt="Image 4">
                <div class="caption">Teaching assistant for PEBBLE BioFusion summer camp.</div>
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
        var swiper = new Swiper('.swiper-container', {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            loop: true, // Enable loop mode
            autoplay: {
                delay: 10000,
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
---
layout: archive
title: "Miscellaneous"
permalink: /misc/
author_profile: true
---

# Undergraduate period

When visiting Central South University as an exchange student in Fall 2021, I was honored and pleased to become the header student of Class 2103 at School of Automation.

![Class of 2103, central south university](../images/csu_2103.jpg)


# Gallery

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
        }
        .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .caption {
            position: absolute;
            bottom: 10px;
            left: 10px;
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 5px;
        }
    </style>
</head>
<body> 
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../images/csu_2103.jpg" alt="Image 1">
                <div class="caption">Caption for Image 1</div>
            </div>
            <div class="swiper-slide">
                <img src="../images/ustb_graduation.png" alt="Image 2">
                <div class="caption">Caption for Image 2</div>
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
            spaceBetween: 30,
            centeredSlides: true,
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


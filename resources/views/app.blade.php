<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>Kevin Whelan - Freelance Web Developer and Software Engineer | Providing website building, app development, SEO, and social media marketing</title>
        <meta name="description" content="Elevate your online presence with expert web development services! As a passionate freelance web and app developer, I transform ideas into stunning, functional websites. Specializing in responsive design, business solutions, and seamless user experiences. Let's bring your vision to life!">


        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Gabarito&family=Sedgwick+Ave&family=Shadows+Into+Light&display=swap" rel="stylesheet">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class=" font-my-handwritten-font antialiased">
        @inertia
    </body>
</html>

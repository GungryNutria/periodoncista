<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php
    include 'src/widgets/libraries.php';
    ?>
</head>

<body>
    <center>
        <header>
            <?php
            include 'src/widgets/menu.php';
            ?>
            <?php
            include 'src/widgets/header_body.php';
            ?>
        </header>
        <?php
        include 'src/widgets/about.php';
        ?>
        <?php
        include 'src/widgets/parallax.php';
        ?>
        <?php
        include 'src/widgets/tratamientos.php';
        ?>
        <?php
        include 'src/widgets/experiencia.php';
        ?>
        <?php
        include 'src/widgets/contacto.php';
        ?>
        <?php
        include 'src/widgets/popups.php';
        ?>
    </center>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="src/js/slider.js"></script>
    <script src="src/js/menu.js"></script>
    <script src="src/js/popup.js"></script>
</body>

</html>
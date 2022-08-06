<?php
  require_once __DIR__ . '/time.php';
?>

<!doctype html>
<html lang="en">
  <head>
    <?php $this->insertVariables() ?>
    <script>window.REQUEST_TIMESTAMP = '<?=getTime()?>';</script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <title>Support Dashboard</title>
  </head>
  <body>
    <?php $this->insertManifest() ?>
    <div id="root"></div>
  </body>
</html>

<?php

function getTime() {
  $dt = new DateTime("now");
  $dt = $dt->format(DateTime::ISO8601);
  return $dt;
}

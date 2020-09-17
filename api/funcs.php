<?php

/**
 * Will return the value of the given key in the given array and if that is not available will return
 * the def argument
 * @param array  $arr $arr
 * @param string $key Array Key
 * @param string,array,bool,null $def
 */

function cwp_gf_wb_get($arr, $key, $def)
{
    if (!is_array($arr)) return $def;
    if (!is_string($key)) return $def;

    return array_key_exists($key,  $arr) ? $arr[$key] : $def;
}

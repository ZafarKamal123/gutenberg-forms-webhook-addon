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


/**
 * Will run some comparison based on the given operator between 2 floats
 * @param float $float1
 * @param float $float2
 * @param string $operator
 */


function cwp_gf_wb_addon_compare_floats($float1, $float2, $operator = '=')
{
    // Check numbers to 5 digits of precision  
    $epsilon = 0.00001;

    $float1 = (float)$float1;
    $float2 = (float)$float2;

    switch ($operator) {
            // equal  
        case "=":
        case "eq": {
                if (abs($float1 - $float2) < $epsilon) {
                    return true;
                }
                break;
            }
            // less than  
        case "<":
        case "lt": {
                if (abs($float1 - $float2) < $epsilon) {
                    return false;
                } else {
                    if ($float1 < $float2) {
                        return true;
                    }
                }
                break;
            }
            // less than or equal  
        case "<=":
        case "lte": {
                if (compareFloatNumbers($float1, $float2, '<') || compareFloatNumbers($float1, $float2, '=')) {
                    return true;
                }
                break;
            }
            // greater than  
        case ">":
        case "gt": {
                if (abs($float1 - $float2) < $epsilon) {
                    return false;
                } else {
                    if ($float1 > $float2) {
                        return true;
                    }
                }
                break;
            }
            // greater than or equal  
        case ">=":
        case "gte": {
                if (compareFloatNumbers($float1, $float2, '>') || compareFloatNumbers($float1, $float2, '=')) {
                    return true;
                }
                break;
            }
        case "<>":
        case "!=":
        case "ne": {
                if (abs($float1 - $float2) > $epsilon) {
                    return true;
                }
                break;
            }
        default: {
                die("Unknown operator '" . $operator . "' in compareFloatNumbers()");
            }
    }

    return false;
}

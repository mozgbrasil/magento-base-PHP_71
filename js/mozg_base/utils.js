/**
* Copyright © 2016 Mozg. All rights reserved.
* See LICENSE.txt for license details.
*/

//

window.onload=function(){
    console.info('window.onload=function()');
};

function onLoad() {
    //console.log(Object.getOwnPropertyNames(window).sort());
    console.log(Object.getOwnPropertyNames(jQuery).sort());
}

function _onLoad() {
    console.info('window.addEventListener("load"');
    var _function = onLoad;
    var milliseconds = 2000; // 1000 ms = 1 second.
    var _setTimeout = setTimeout(_function, milliseconds);
}

window.addEventListener("load", function(){ _onLoad(); });

//-

/**
 * 開發環境
 * dev: 開發的路徑
 * min: 壓縮後的路徑
 */
var environment    = "min"; 

/**
 * appscript 的路徑
 */
var path_appscript = "appscript/" + environment + "/";

/**
 * 外掛套件的路徑
 */
var path_plugin    = "bower_components/";

/**
 * 全域檔案與依賴
 */
var shimdeps_global = {
    'jquery': [path_plugin + 'jquery/dist/jquery.min', 
        false
    ],
    'jquery-ui': [path_plugin + 'jquery-ui/jquery-ui.min', [
        'jquery', 'css!' + path_plugin + 'jquery-ui/themes/base/jquery-ui.min'
    ]],
    'vmodel': [path_plugin + 'vmodel.js/src/jquery.vmodel.min', [
        'jquery'
    ]],
    'vpage': [path_plugin + 'vpage.js/src/jquery.vpage.min', [
        'jquery'
    ]],
    'transit': [path_plugin + 'jquery.transit/jquery.transit', [
        'jquery'
    ]],
    'fancybox': [path_plugin + 'fancybox/source/jquery.fancybox.pack', [
        'jquery', 'css!' + path_plugin + 'fancybox/source/jquery.fancybox'
    ]],
    'mousewheel': [path_plugin + 'jquery-mousewheel/jquery.mousewheel.min', [
        'jquery'
    ]],
    'diff_screen': [path_appscript + 'controller/global/md/diff_screen', [
        'vmodel'
    ]],
    'frame': [path_appscript + 'controller/global/md/frame', [
        'diff_screen'
    ]],
    'mobile': [path_appscript + 'controller/global/md/when_mobile', [
        'vmodel'
    ]],
    'pad': [path_appscript + 'controller/global/md/when_pad', [
        'vmodel'
    ]],
    'desktop': [path_appscript + 'controller/global/md/when_desktop', [
        'vmodel'
    ]],


};

// 添加避免緩存
var urlArgs = "bust=" +  (new Date()).getTime()

// 載入 require 套件
var map = {
    '*': {
        'css': path_plugin + 'require-css/css.js' 
    }
}

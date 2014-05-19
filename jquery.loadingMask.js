/**
 * Created by XadillaX on 14-5-19.
 */
;
(function($) {
////////////////////////////////
    /**
     * 生成一个GUID
     * @returns {string}
     */
    function newGuid() {
        var guid = "";
        for (var i = 1; i <= 32; i++){
            var n = Math.floor(Math.random()*16.0).toString(16);
            guid +=   n;
            if((i==8)||(i==12)||(i==16)||(i==20))
                guid += "-";
        }
        return guid;
    }

    var __masks = {};

    /**
     * Loading Mask
     * @param objectId
     * @constructor
     */
    var LoadingMask = function(objectId) {
        this.object = $("#" + objectId);
        this.status = "hidden";
    };

    LoadingMask.prototype.show = function() {
        this.object.css("display", "block");
        this.status = "shown";

        this.object.children().first().children().first().children().first().css("height", this.object.height() + "px");
        this.object.children().first().children().first().children().first().css("width", this.object.width() + "px");
    };

    LoadingMask.prototype.hide = function() {
        this.object.css("display", "none");
        this.status = "hidden";
    };

    LoadingMask.prototype.toggle = function() {
        if(this.status === "shown") this.hide();
        else this.show();
    };

    function impl(object, cmd) {
        var object = $(object);
        //console.log(object.html());

        // 若之前没生成则生成
        if(object.attr("__mask-id") === "" || object.attr("__mask-id") === undefined) {
            object.css("display", "none");
            var maskId = newGuid();
            var html = "<table class=\"__jquery-loading-mask\" id='__j_loading_mask-" + maskId + "'><tbody><tr><td>" + object.html() + "</td></tr></tbody></table>";
            maskId = "__j_loading_mask-" + maskId;
            object.attr("__mask-id", maskId);

            $("body").append(html);

            __masks[maskId] = new LoadingMask(maskId);

            // 适应
            var innerObject = $("#" + maskId);
            $(window).resize(function() {
                innerObject.children().first().children().first().children().first().css("height", innerObject.height() + "px");
                innerObject.children().first().children().first().children().first().css("width", innerObject.width() + "px");
            });
        }

        var maskId = object.attr("__mask-id");

        // 执行命令
        if(cmd === "show") {
            __masks[maskId].show();
        } else if(cmd === "hide") {
            __masks[maskId].hide();
        } else if(cmd === "toggle") {
            __masks[maskId].toggle();
        }

        return __masks[maskId];
    }

    /**
     * loading mask
     * @param [cmd]
     * @returns {*}
     */
    $.fn.loadingMask = function(cmd) {
        if($(this).length === 1) {
            return impl($(this)[0], cmd);
        } else {
            $(this).each(function() {
                impl($(this), cmd);
            });
        }
    };

////////////////////////////////
})(jQuery);

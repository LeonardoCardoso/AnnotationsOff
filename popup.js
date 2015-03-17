var lc1306 = jQuery.noConflict(true);

(function ($) {

    $(function () {

        execute(true, $);

        $('input[name="type"]:radio').change(
            function () {
                var newValue = $('input[name=type]:checked', '#cvd_radios').val();
                chrome.storage.sync.set({'value': newValue}, function () {
                    chrome.tabs.executeScript({file: 'background.js'});
                });

            });

    });

})(lc1306);
function execute(updateInput, jquery) {
    chrome.storage.sync.get("value", function (obj) {

        obj.value = checkNullity(obj);

        if (updateInput) {
            jquery("input[name=type][value=" + obj.value + "]").prop('checked', true);
        }

        changeAnnotations(document, obj.value);

    });
}

function changeAnnotations(document, display) {
    var css = '.video-annotations, .iv-drawer-teaser { display: ' + display + ' !important; }';
    var head = document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}

function checkNullity(obj) {
    if (obj.value === null || obj.value === undefined) {
        obj.value = "block";
        chrome.storage.sync.set({'value': obj.value});
    }
    return obj.value;
}
function click(e) {
    chrome.tabs.create({ url: e.target.href + '&extid=' + chrome.runtime.id});

    window.close();
}

function showWarning() {
    hideWarning(function() {
        chrome.notifications.create(warningId, {
            iconUrl: chrome.runtime.getURL('images/icon-48.png'),
            title: 'Removal required',
            type: 'basic',
            message: chrome.i18n.getMessage('name') + ' is obsolete ' +
                'and must be removed. A replacement Extension ' +
                'is available.',
            buttons: [{ title: 'Learn More' }],
            priority: 2,
        }, function() {});
    });
}


document.addEventListener('DOMContentLoaded', function () {
    var anchors = document.querySelectorAll('a');
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', click);
    }
});

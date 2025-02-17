// Event listener

function isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
  }

document.addEventListener('universalWrapped_connectExtension', function(e) {
    const trackedVars = [
        'clips', 
        'wireCost', 
        'unsoldClips', 
        'wire', 
        'clipmakerLevel', 
        'operations', 
        'funds', 
        'processors',
        'memory',
        'trust',
        'creativity',
        'marketingLvl',
        'margin',
        'demand',
    ]
    time = Date.now()
    chrome.storage.local.get(trackedVars, data => {
        const updatedVals = {}
        trackedVars.forEach((key) => {
            var keyArr = isIterable(data[key]) ? data[key] : [];
            var newVal = e.detail[key]
            updatedVals[key] = [...keyArr, [time, newVal]]
        });
        chrome.storage.local.set(updatedVals);
    });
});
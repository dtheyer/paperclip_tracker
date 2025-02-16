

async function logstuff() {
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
    while (true) {
        setTimeout(function() {
            /* Example: Send data from the page to your Chrome extension */
            const varMap = {};
            for (const key of trackedVars) {
                varMap[key] = eval(key);
            }
            document.dispatchEvent(new CustomEvent('universalWrapped_connectExtension', {detail: varMap}
            ));
        }, 0);
        await new Promise(r => setTimeout(r, 2000));

    }
}

logstuff();
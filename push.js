let push = require('web-push');

const VAPIDKeys = {
    publicKey: 'BJIvROxYi3VkdMe9LDKDAkyrJ-do6Cgt_ZzVEViq_VWW4UvxwGqSHYNavDqoFNShRxYxCjYI5gHzZngvgU5d1YE',
    privateKey: 'u3uHDnSLiJNBmQWFRI7CIHY8RSTrb-Xl_ycGeb5hqVc'
}

push.setVapidDetails('mailto:test@code.co.uk', VAPIDKeys.publicKey, VAPIDKeys.privateKey);

let sub = {
    "endpoint": "https://par02p.notify.windows.com/w/?token=BQYAAADRvxjTQMimDP0oh90Ucke8SWVgNdtyd1BJ0Wwj4cPtqoPxl9QpA2FngHdvXcRZWFmgNmgiMUS7dyHeVA2O2%2fmsoBvS8wIZBGD8He8KxVUh%2fFdRW9%2fuwTgjsmC%2brohmisVTfoinnOH8cdg9%2fLZc7RSsLIoywBbYBZUQ6FXZU5%2fOHSuoeZbox7RtH5N24BPON%2b3XbveiTSl9SyG1eDK2Qe0nUgfTDxAL7DIOQNokZatI7uofturKNA8Q%2bmEgtP%2bi5%2f%2bk3aAUUuor98GVIQ5JEJ9rP4r%2fx1JEx4JaeHIRyozjXwlZJlyalX5PwgvXrr5BD2Jl7lLxwQ4jEeNMlDBFc26J%2bKHDwdnU69%2fczKpAVzgWcQ%3d%3d",
    "expirationTime": null,
    "keys": {
        "p256dh": "BJovhWADn0bigntyVswzyv2fcZUM37xs3IJSiUJGELD9_FqBz9rvTHMVtTOQkOQdD7acFbFBJIwz6kTPPFZuoAc",
        "auth": "TjPcv-PrteHBSMu6Af62-Q"
    }
};
push.sendNotification(sub, 'Test')
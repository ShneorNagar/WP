let push = require('web-push');

const VAPIDKeys = {
    publicKey: 'BJIvROxYi3VkdMe9LDKDAkyrJ-do6Cgt_ZzVEViq_VWW4UvxwGqSHYNavDqoFNShRxYxCjYI5gHzZngvgU5d1YE',
    privateKey: 'u3uHDnSLiJNBmQWFRI7CIHY8RSTrb-Xl_ycGeb5hqVc'
}

push.setVapidDetails('mailto:test@code.co.uk', VAPIDKeys.publicKey, VAPIDKeys.privateKey);

let sub = {};
push.sendNotification(sub, 'Test')
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
function throttle(fn, wait = 300) {
    let inThrottle, lastFn, lastTime;
    return function (args) {
        if (!inThrottle) {
            fn(args);
            lastTime = Date.now();
            inThrottle = true;
        }
        else {
            clearTimeout(lastFn);
            lastFn = setTimeout(() => {
                if (Date.now() - lastTime >= wait) {
                    fn(args);
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        }
    };
}
exports.throttle = throttle;
//# sourceMappingURL=throttle.js.map
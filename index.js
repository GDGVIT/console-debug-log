function debug() {
    if (process.env.DEBUG) {
        const args = Array.prototype.slice.call(arguments);
        console.log(args.join(" "));
    }
}

module.exports.debug = debug;

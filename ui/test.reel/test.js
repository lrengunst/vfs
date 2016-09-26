/**
 * @module ui/test.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Test
 * @extends Component
 */
exports.Test = Component.specialize(/** @lends Test# */ {
    constructor: {
        value: function Test() {
            this.super();
        }
    }
});

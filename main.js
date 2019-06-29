var app = new Vue({
    el: '#app',
    data: {
        message: 'foo -> bar'
    },
    methods: {
        replace: function (src) {
            var dst = src;

            // dst = dst.replace(//g, "");
            dst = dst.replace(/foo/g, "bar");

            return dst;
        }
    }
})
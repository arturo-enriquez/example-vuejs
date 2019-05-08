const app = new Vue({
    el: "#app",
    data: {
        message: 'Hello',
        counter: 0
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
            // split: array > reverse > join: convierte a cadena
        },
        color() {
            return {
                'bg-success': this.counter <= 10,
                'bg-warning': this.counter > 10 && this.counter < 20,
                'bg-danger': this.counter >= 20
            }
        }
    }
})
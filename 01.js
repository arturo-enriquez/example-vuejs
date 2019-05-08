const app = new Vue({
    el: '#app',
    data: {
        title: 'hello ',
        fruts: [
            {
                name: 'Manzana',
                stock: 10
            },
            {
                name: 'Platano', 
                stock: 0
            },
            {
                name: 'Pera', 
                stock: 1
            }
        ],
        newFrut: ''
    },
    methods: {
        addFrut () {
            if(this.newFrut != '')
            this.fruts.push({
                stock: this.newFrutStock
            });
            this.newFrut = '';
        }
    }
});
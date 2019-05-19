const app = new Vue({
    el: '#app',
    data: {
        title: 'List of Fruits',
        fruits: [
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
        newFruit: '',
        total: 0
    },
    methods: {
        addFruit () {
            if(this.newFruit != '') 
            this.fruits.push({
                name: this.newFruit,
                stock: 0
            });
            this.newFruit = '';
        }
    },
    computed: {
        totalFruits() {
            this.total = 0;
            for(fruit of this.fruits) {
                this.total += fruit.stock;
            }
            return this.total;
        }
    }
});
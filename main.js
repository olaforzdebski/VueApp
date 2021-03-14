const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            details: ['20% polyster', '30% wool', '50% cotton'],
            variants: [
                {id: 1, color: 'blue', image: './assets/socks_blue.jpg'},
                {id: 2, color: 'green', image: './assets/socks_green.jpg'}
            ],
            inStock: false,
            image: '/assets/socks_blue.jpg'
        }
    }, 
    methods: {
        addToCart() {
            this.cart++
        },
        changeImage(x) {
            this.image = x
        }    
    }
})

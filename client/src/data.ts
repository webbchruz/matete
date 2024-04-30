import { Product } from "./types/Products";

export const sampleProducts:Product[]=[
{
    name:'Nike Slim shirt',
    slug:'nike-slim-shirt',
    category:'Shirts',
    image:'../images/p1.jpg',
    price:120,
    countInStock:10,
    brand:'Nike',
    rating:4.5,
    numReviews:10,
    description:'high quality shirt',
},
{
    name:'Lacoste free Pants',
    slug:'Lacost-free-pants',
    category:'Pants',
    image:'../images/p3.png',
    price:220,
    countInStock:0,
    brand:'Lacoste',
    rating:4.8,
    numReviews:17,
    description:'high quality product'
},
{
    name:'Nike Slim Pant',
    slug:'nike-slim-pant',
    category:'pants',
    image:'../images/p4.jpg',
    price:78,
    countInStock:15,
    brand: 'Nike',
    rating:4.5,
    numReviews:14,
    description:'high quality product',
}
]
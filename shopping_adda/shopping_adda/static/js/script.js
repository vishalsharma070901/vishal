let c = 0
document.getElementById('quantity').addEventListener('click', function () {
    if (document.getElementById('quantity').textContent == 'Add to Cart') {
        document.querySelector('.badge').textContent = ++c;
        document.getElementById('quantity').textContent = 'Added';
    }
})

items = [
    {
        title: 'Bose Headphones',
        desc: 'Product Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, at. Dignissimos rerum incidunt temporibus laudantium. Rem, eveniet corporis. Itaque delectus quae nesciunt nemo, maiores minus deserunt vel. Vero, nulla quisquam!'
    },
    {
        title: 'Canon Camera',
        desc: 'Product Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, at. Dignissimos rerum incidunt temporibus laudantium. Rem, eveniet corporis. Itaque delectus quae nesciunt nemo, maiores minus deserunt vel. Vero, nulla quisquam!'
    },
    {
        title: 'Fossil Wrist Watch',
        desc: 'Product Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, at. Dignissimos rerum incidunt temporibus laudantium. Rem, eveniet corporis. Itaque delectus quae nesciunt nemo, maiores minus deserunt vel. Vero, nulla quisquam!'
    },
    {
        title: 'Poeme Perfume',
        desc: 'Product Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, at. Dignissimos rerum incidunt temporibus laudantium. Rem, eveniet corporis. Itaque delectus quae nesciunt nemo, maiores minus deserunt vel. Vero, nulla quisquam!'
    },
    {
        title: 'Rubicks Cube',
        desc: 'Product Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, at. Dignissimos rerum incidunt temporibus laudantium. Rem, eveniet corporis. Itaque delectus quae nesciunt nemo, maiores minus deserunt vel. Vero, nulla quisquam!'
    },
    {
        title: 'Image Sunscream',
        desc: 'Product Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, at. Dignissimos rerum incidunt temporibus laudantium. Rem, eveniet corporis. Itaque delectus quae nesciunt nemo, maiores minus deserunt vel. Vero, nulla quisquam!'
    },
    {
        title: 'Apple Iphone',
        desc: 'Product Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, at. Dignissimos rerum incidunt temporibus laudantium. Rem, eveniet corporis. Itaque delectus quae nesciunt nemo, maiores minus deserunt vel. Vero, nulla quisquam!'
    },
    {
        title: 'OLAY Cream',
        desc: 'Product Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, at. Dignissimos rerum incidunt temporibus laudantium. Rem, eveniet corporis. Itaque delectus quae nesciunt nemo, maiores minus deserunt vel. Vero, nulla quisquam!'
    },
    {
        title: 'Purse',
        desc: 'Product Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, at. Dignissimos rerum incidunt temporibus laudantium. Rem, eveniet corporis. Itaque delectus quae nesciunt nemo, maiores minus deserunt vel. Vero, nulla quisquam!'
    },
    {
        title: 'Now Oils',
        desc: 'Product Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, at. Dignissimos rerum incidunt temporibus laudantium. Rem, eveniet corporis. Itaque delectus quae nesciunt nemo, maiores minus deserunt vel. Vero, nulla quisquam!'
    },
    {
        title: 'Electronics',
        desc: 'Product Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, at. Dignissimos rerum incidunt temporibus laudantium. Rem, eveniet corporis. Itaque delectus quae nesciunt nemo, maiores minus deserunt vel. Vero, nulla quisquam!'
    },
    {
        title: 'Apple Iphone',
        desc: 'Product Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, at. Dignissimos rerum incidunt temporibus laudantium. Rem, eveniet corporis. Itaque delectus quae nesciunt nemo, maiores minus deserunt vel. Vero, nulla quisquam!'
    }
]

const select=document.querySelectorAll('.items');
for(let i=0;i<select.length;i++){
    select[i].addEventListener('click',function(){
        document.getElementById('product_title').innerText = items[i].title
        document.getElementById('product_desc').innerText = items[i].desc
        select[i].src=`{% static 'images/product/${i}.jpg' %}`
        console.log(document.getElementById('product_title').innerText)
    })
}
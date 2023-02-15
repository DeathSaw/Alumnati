const product=[
    {
    id:1,
    title:'Alumni 1',
    subtitle :'Germany',
    image:'imagess/man.png',
   
},
{
    id:2,
    image : 'imagess/man.png',
    title:'Alumni 2',
    subtitle :'USA',

},
{
    id:3,
    image : 'imagess/man.png',
    title:'Alumni 3',
    subtitle :'Canada',
   
},
]
const categories=[...new Set(product.map((item)=>{return item }))]
document.getElementById('searchbar').addEventListener('keyup',(e)=> {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>{
    return ( 
        item.subtitle.toLowerCase().includes(searchData)
    )
})
displayItem(filterData)

});
const displayItem=(items)=>{
    document.getElementById('root').innerHTML=items.map((item)=>{
        var{image,title,subtitle,price}=item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='buttom'>
                    <p> ${title}</p>
                    <h2> ${subtitle}</h2>
                    
                   
                </div>
            </div>`
        );
    }).join('')
};
displayItem(categories);

const product=[
    {
    id:1,
    title:'Alumni 1',
    subtitle :'Graduation year :2019',
    image:'imagess/man.png',
   
},
{
    id:2,
    image : 'imagess/man.png',
    title:'Alumni 2',
    subtitle :'Graduation year :2010',

},
{
    id:3,
    image : 'imagess/man.png',
    title:'Alumni 3',
    subtitle :'Graduation year :2015',
   
},
{
    id:4,
    image : 'imagess/man.png',
    title:'Alumni 3',
    subtitle :'Graduation year :2009'
    ,
   
},
{
    id:5,
    image : 'imagess/man.png',
    title:'Alumni 3',
    subtitle :'Graduation year :2019',
   
},
{
    id:6,
    image : 'imagess/man.png',
    title:'Alumni 3',
    subtitle :'Graduation year :2007',
   
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
        var{image,title,subtitle}=item;
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

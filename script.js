///H2 tag's color change
const h2 = document.getElementsByTagName('h2');
for(const h of h2)
{
    h.style.color='lightblue';
}

///Backgound Color change
document.getElementById('backpack').style.backgroundColor = 'tomato';

///Remove Child
const items = document.getElementsByClassName('butt');
for(const item of items)
{
    item.addEventListener('click',function(event){
        event.target.parentNode.removeChild(event.target);
    })
}


///////Button Enable Disable
document.getElementById('input').addEventListener('keyup',function(event){
    if(event.target.value == 'email')
    {
        document.getElementById('sub').removeAttribute('disabled');
    }
    else
    {
        document.getElementById('sub').setAttribute('disabled',true);
    }
})

///Image change
const images = document.getElementsByClassName('all');
for(const image of images)
{
    image.addEventListener('mouseenter',function(){
        image.src = 'shoe-3.png';
    })
}
document.getElementById('all1').addEventListener('mouseenter',function(){
    document.getElementById('all1').src = 'shoe-2.png';
})

////Background color change after double clicking
document.getElementById('touch').addEventListener('dblclick',function(){
    document.getElementById('touch').style.backgroundColor = 'green';
})
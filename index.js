function redirect(){
    window.location.href = "https://www.apple.com/";
}


function store()
{

    let output1 = `<div class="show">
    <div style= "padding-top:26px" class="section2">
        <div class="sec1">
            <div class="sub" style="padding-left: 0;"><a href=""></a>Shop</div>
            <div class="subtitle"> <a href=""></a>Shop the Latest</div> 
            <div class="subtitle"><a href=""></a> Mac</div>
            <div class="subtitle"><a href=""></a>iPad</div>
            <div class="subtitle"><a href=""></a>iPhone</div>
            <div class="subtitle"><a href=""></a>Apple Watch</div>
            <div class="subtitle"><a href=""></a>Accessories</div>
        </div>
        <div class="sec1">
            <div class="sub"><a href=""></a>Quick links</div>
            <div class="subtitle2"><a href=""></a>Festive Offer</div> 
            <div class="subtitle2"><a href=""></a> Find a store</div>
            <div class="subtitle2"><a href=""></a>Order satus</div>
            <div class="subtitle2"><a href=""></a>Ways to Buy</div>
            
        </div>
        <div class="sec1">
            <div class="sub"><a href=""></a>Shop special stores</div>
            <div class="subtitle2"><a href=""></a>Education</div> 
            <div class="subtitle2"><a href=""></a>Business</div>
        </div>

    </div></div>`;
    document.getElementById('shownav').innerHTML = output1;
}

function closenav ()
{
    document.getElementById('shownav').innerHTML = '';
    document.body.style.filter = '';
}

function topclose()
{
    let h = window.event.clientY;
    if (h < 15)
    {
        document.getElementById('shownav').innerHTML = '';
    }   
}

function mac()
{
    let output1 = `<div class="show">
    <div style= "padding-top:26px" class="section2">
        <div class="sec1">
            <div class="sub" style="padding-left: 0;"><a href=""></a>Explore Mac</div>
            <div class="subtitle"> <a href=""></a>Explore all Mac</div> 
            <div class="subtitle"><a href=""></a> Macbook air</div>
            <div class="subtitle"><a href=""></a> Macbok Pro</div>
            <div class="subtitle"><a href=""></a>iMac</div>
            <div class="subtitle"><a href=""></a>Mac mini</div>
            <div class="subtitle"><a href=""></a>Accessories</div>
        </div>
        <div class="sec1">
            <div class="sub"><a href=""></a>Quick links</div>
            <div class="subtitle2"><a href=""></a>Festive Offer</div> 
            <div class="subtitle2"><a href=""></a> Find a store</div>
            <div class="subtitle2"><a href=""></a>Order satus</div>
            <div class="subtitle2"><a href=""></a>Ways to Buy</div>
            
        </div>
        <div class="sec1">
            <div class="sub"><a href=""></a>Shop special stores</div>
            <div class="subtitle2"><a href=""></a>Education</div> 
            <div class="subtitle2"><a href=""></a>Business</div>
        </div>

    </div></div>`;
    document.getElementById('shownav').innerHTML = output1;   
}

function ipad()
{
    let output1 = `<div class="show">
    <div style= "padding-top:26px" class="section2">
        <div class="sec1">
            <div class="sub" style="padding-left: 0;"><a href=""></a>Explore iPad</div>
            <div class="subtitle"> <a href=""></a>Explore all Mac</div> 
            <div class="subtitle"><a href=""></a> Macbook air</div>
            <div class="subtitle"><a href=""></a> Macbok Pro</div>
            <div class="subtitle"><a href=""></a>iMac</div>
            <div class="subtitle"><a href=""></a>Mac mini</div>
            <div class="subtitle"><a href=""></a>Accessories</div>
        </div>
        <div class="sec1">
            <div class="sub"><a href=""></a>Quick links</div>
            <div class="subtitle2"><a href=""></a>Festive Offer</div> 
            <div class="subtitle2"><a href=""></a> Find a store</div>
            <div class="subtitle2"><a href=""></a>Order satus</div>
            <div class="subtitle2"><a href=""></a>Ways to Buy</div>
            
        </div>
        <div class="sec1">
            <div class="sub"><a href=""></a>Shop special stores</div>
            <div class="subtitle2"><a href=""></a>Education</div> 
            <div class="subtitle2"><a href=""></a>Business</div>
        </div>

    </div></div>`;
    document.getElementById('shownav').innerHTML = output1;   

}

function iphone()
{
    let output1 = `<div class="show">
    <div style= "padding-top:26px" class="section2">
        <div class="sec1">
            <div class="sub" style="padding-left: 0;"><a href=""></a>Explore iPhone</div>
            <div class="subtitle"> <a href=""></a>Explore all Mac</div> 
            <div class="subtitle"><a href=""></a> Macbook air</div>
            <div class="subtitle"><a href=""></a> Macbok Pro</div>
            <div class="subtitle"><a href=""></a>iMac</div>
            <div class="subtitle"><a href=""></a>Mac mini</div>
            <div class="subtitle"><a href=""></a>Accessories</div>
        </div>
        <div class="sec1">
            <div class="sub"><a href=""></a>Quick links</div>
            <div class="subtitle2"><a href=""></a>Festive Offer</div> 
            <div class="subtitle2"><a href=""></a> Find a store</div>
            <div class="subtitle2"><a href=""></a>Order satus</div>
            <div class="subtitle2"><a href=""></a>Ways to Buy</div>
            
        </div>
        <div class="sec1">
            <div class="sub"><a href=""></a>Shop special stores</div>
            <div class="subtitle2"><a href=""></a>Education</div> 
            <div class="subtitle2"><a href=""></a>Business</div>
        </div>

    </div></div>`;
    document.getElementById('shownav').innerHTML = output1;   

}
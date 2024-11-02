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
            <div class="subtitle"><a href=""></a>Mac studio</div>
            <div class="subtitle"><a href=""></a>Mac Pro</div>
        </div>
        <div class="sec1">
            <div class="sub"><a href=""></a>Shop mac</div>
            <div class="subtitle2"><a href=""></a>Shop Mac</div> 
            <div class="subtitle2"><a href=""></a>Help me choose</div>
            <div class="subtitle2"><a href=""></a>Mac accessories</div>
            <div class="subtitle2"><a href=""></a>Mac trade in</div>
            
        </div>
        <div class="sec1">
            <div class="sub"><a href=""></a>More from mac</div>
            <div class="subtitle2"><a href=""></a>Mac support</div> 
            <div class="subtitle2"><a href=""></a>AppleCare+ for Mac</div>
            <div class="subtitle2"><a href=""></a>MacOS Sequoia</div>
            <div class="subtitle2"><a href=""></a>Apple Intelligence</div>
            <div class="subtitle2"><a href=""></a>Apps by Apple</div>
            <div class="subtitle2"><a href=""></a>Continuity</div>
            <div class="subtitle2"><a href=""></a>iCloud</div>
            <div class="subtitle2"><a href=""></a>Mac for business</div>
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
            <div class="subtitle"> <a href=""></a>Explore all iPad</div> 
            <div class="subtitle"><a href=""></a>iPad Pro</div>
            <div class="subtitle"><a href=""></a>iPad Air</div>
            <div class="subtitle"><a href=""></a>iPad</div>
            <div class="subtitle"><a href=""></a>iPad mini</div>
            <div class="subtitle"><a href=""></a>Apple Pencil</div>
            <div class="subtitle"><a href=""></a>Keyboards</div>
        </div>
        <div class="sec1">
            <div class="sub"><a href=""></a>Shop iPad</div>
            <div class="subtitle2"><a href=""></a>Shop iPad</div> 
            <div class="subtitle2"><a href=""></a>iPad accessories</div>
            <div class="subtitle2"><a href=""></a>Apple Trade in</div>
            <div class="subtitle2"><a href=""></a>Financing</div>
            
        </div>
        <div class="sec1">
            <div class="sub"><a href=""></a>More from iPad</div>
            <div class="subtitle2"><a href=""></a>iPad support</div> 
            <div class="subtitle2"><a href=""></a>iPadOS 18</div>
            <div class="subtitle2"><a href=""></a>iPadOS 18</div>
            <div class="subtitle2"><a href=""></a>Apple intelligence</div>
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
            <div class="subtitle"> <a href=""></a>Explore all iPhone</div> 
            <div class="subtitle"><a href=""></a>iPhone 16 Pro</div>
            <div class="subtitle"><a href=""></a>iPhone 16</div>
            <div class="subtitle"><a href=""></a>iPhone 15</div>
            <div class="subtitle"><a href=""></a>iPhone 14</div>
            <div class="subtitle"><a href=""></a>iPhone SE</div>
        </div>
        <div class="sec1">
            <div class="sub"><a href=""></a>Shop iPhone</div>
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
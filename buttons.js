{
    function createbuttons()
    {
        //            X Axis           //
             
        var xcw1div = document.createElement('div');
        xcw1div.innerHTML = "<div id='xcw1' onclick='turnit(" + xcw + " , 1)" + ";'>X-CW1</div>";
        xcw1div.style.border = "2px solid grey";
        xcw1div.style.background = "lightgrey";
        xcw1div.style.position = "absolute";
        xcw1div.borderstyle = "solid";
        xcw1div.borderwidth = "5px";
        xcw1div.style.left = "20px";
        xcw1div.style.top = "20px";
        xcw1div.style.width = "70px";
        xcw1div.style.cursor = "pointer";
        xcw1div.style.fontsize = "10px";
        xcw1div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(xcw1div);
        
        var xacw1div = document.createElement('div');
        xacw1div.innerHTML = "<div id='xacw1' onclick='turnit(" + xacw + " , 1)" + ";'>X-ACW1</div>";
        xacw1div.style.border = "2px solid grey";
        xacw1div.style.background = "lightgrey";
        xacw1div.style.position = "absolute";
        xacw1div.borderstyle = "solid";
        xacw1div.borderwidth = "5px";
        xacw1div.style.left = "110px";
        xacw1div.style.top = "20px";
        xacw1div.style.width = "70px";
        xacw1div.style.cursor = "pointer";
        xacw1div.style.fontsize = "10px";
        xacw1div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(xacw1div);
               
        var xcw2div = document.createElement('div');
        xcw2div.innerHTML = "<div id='xcw2' onclick='turnit(" + xcw + " , 2)" + ";'>X-CW2</div>";
        xcw2div.style.border = "2px solid grey";
        xcw2div.style.background = "lightgrey";
        xcw2div.style.position = "absolute";
        xcw2div.borderstyle = "solid";
        xcw2div.borderwidth = "5px";
        xcw2div.style.left = "20px";
        xcw2div.style.top = "50px";
        xcw2div.style.width = "70px";
        xcw2div.style.cursor = "pointer";
        xcw2div.style.fontsize = "10px";
        xcw2div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(xcw2div);
        
        var xacw2div = document.createElement('div');
        xacw2div.innerHTML = "<div id='xacw2' onclick='turnit(" + xacw + " , 2)" + ";'>X-ACW2</div>";
        xacw2div.style.border = "2px solid grey";
        xacw2div.style.background = "lightgrey";
        xacw2div.style.position = "absolute";
        xacw2div.borderstyle = "solid";
        xacw2div.borderwidth = "5px";
        xacw2div.style.left = "110px";
        xacw2div.style.top = "50px";
        xacw2div.style.width = "70px";
        xacw2div.style.cursor = "pointer";
        xacw2div.style.fontsize = "10px";
        xacw2div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(xacw2div);
                     
        var xcw3div = document.createElement('div');
        xcw3div.innerHTML = "<div id='xcw3' onclick='turnit(" + xcw + " , 3)" + ";'>X-CW3</div>";
        xcw3div.style.border = "2px solid grey";
        xcw3div.style.background = "lightgrey";
        xcw3div.style.position = "absolute";
        xcw3div.borderstyle = "solid";
        xcw3div.borderwidth = "5px";
        xcw3div.style.left = "20px";
        xcw3div.style.top = "80px";
        xcw3div.style.width = "70px";
        xcw3div.style.cursor = "pointer";
        xcw3div.style.fontsize = "10px";
        xcw3div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(xcw3div);
        
        var xacw3div = document.createElement('div');
        xacw3div.innerHTML = "<div id='xacw3' onclick='turnit(" + xacw + " , 3)" + ";'>X-ACW3</div>";
        xacw3div.style.border = "2px solid grey";
        xacw3div.style.background = "lightgrey";
        xacw3div.style.position = "absolute";
        xacw3div.borderstyle = "solid";
        xacw3div.borderwidth = "5px";
        xacw3div.style.left = "110px";
        xacw3div.style.top = "80px";
        xacw3div.style.width = "70px";
        xacw3div.style.cursor = "pointer";
        xacw3div.style.fontsize = "10px";
        xacw3div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(xacw3div);
        
        //            Y Axis          //
        
        var ycw1div = document.createElement('div');
        ycw1div.innerHTML = "<div id='ycw1' onclick='turnit(" + ycw + " , 1)" + ";'>Y-CW1</div>";
        ycw1div.style.border = "2px solid grey";
        ycw1div.style.background = "lightgrey";
        ycw1div.style.position = "absolute";
        ycw1div.borderstyle = "solid";
        ycw1div.borderwidth = "5px";
        ycw1div.style.left = "20px";
        ycw1div.style.top = "110px";
        ycw1div.style.width = "70px";
        ycw1div.style.cursor = "pointer";
        ycw1div.style.fontsize = "10px";
        ycw1div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(ycw1div);
        
        var yacw1div = document.createElement('div');
        yacw1div.innerHTML = "<div id='yacw1' onclick='turnit(" + yacw + " , 1)" + ";'>Y-ACW1</div>";
        yacw1div.style.border = "2px solid grey";
        yacw1div.style.background = "lightgrey";
        yacw1div.style.position = "absolute";
        yacw1div.borderstyle = "solid";
        yacw1div.borderwidth = "5px";
        yacw1div.style.left = "110px";
        yacw1div.style.top = "110px";
        yacw1div.style.width = "70px";
        yacw1div.style.cursor = "pointer";
        yacw1div.style.fontsize = "10px";
        yacw1div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(yacw1div);
               
        var ycw2div = document.createElement('div');
        ycw2div.innerHTML = "<div id='ycw2' onclick='turnit(" + ycw + " , 2)" + ";'>Y-CW2</div>";
        ycw2div.style.border = "2px solid grey";
        ycw2div.style.background = "lightgrey";
        ycw2div.style.position = "absolute";
        ycw2div.borderstyle = "solid";
        ycw2div.borderwidth = "5px";
        ycw2div.style.left = "20px";
        ycw2div.style.top = "140px";
        ycw2div.style.width = "70px";
        ycw2div.style.cursor = "pointer";
        ycw2div.style.fontsize = "10px";
        ycw2div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(ycw2div);
        
        var yacw2div = document.createElement('div');
        yacw2div.innerHTML = "<div id='yacw2' onclick='turnit(" + yacw + " , 2)" + ";'>Y-ACW2</div>";
        yacw2div.style.border = "2px solid grey";
        yacw2div.style.background = "lightgrey";
        yacw2div.style.position = "absolute";
        yacw2div.borderstyle = "solid";
        yacw2div.borderwidth = "5px";
        yacw2div.style.left = "110px";
        yacw2div.style.top = "140px";
        yacw2div.style.width = "70px";
        yacw2div.style.cursor = "pointer";
        yacw2div.style.fontsize = "10px";
        yacw2div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(yacw2div);
                     
        var ycw3div = document.createElement('div');
        ycw3div.innerHTML = "<div id='ycw3' onclick='turnit(" + ycw + " , 3)" + ";'>Y-CW3</div>";
        ycw3div.style.border = "2px solid grey";
        ycw3div.style.background = "lightgrey";
        ycw3div.style.position = "absolute";
        ycw3div.borderstyle = "solid";
        ycw3div.borderwidth = "5px";
        ycw3div.style.left = "20px";
        ycw3div.style.top = "170px";
        ycw3div.style.width = "70px";
        ycw3div.style.cursor = "pointer";
        ycw3div.style.fontsize = "10px";
        ycw3div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(ycw3div);
        
        var yacw3div = document.createElement('div');
        yacw3div.innerHTML = "<div id='yacw3' onclick='turnit(" + yacw + " , 3)" + ";'>Y-ACW3</div>";
        yacw3div.style.border = "2px solid grey";
        yacw3div.style.background = "lightgrey";
        yacw3div.style.position = "absolute";
        yacw3div.borderstyle = "solid";
        yacw3div.borderwidth = "5px";
        yacw3div.style.left = "110px";
        yacw3div.style.top = "170px";
        yacw3div.style.width = "70px";
        yacw3div.style.cursor = "pointer";
        yacw3div.style.fontsize = "10px";
        yacw3div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(yacw3div);
        
        //            Z Axis             //
               
        var zcw1div = document.createElement('div');
        zcw1div.innerHTML = "<div id='zcw1' onclick='turnit(" + zcw + " , 1)" + ";'>Z-CW1</div>";
        zcw1div.style.border = "2px solid grey";
        zcw1div.style.background = "lightgrey";
        zcw1div.style.position = "absolute";
        zcw1div.borderstyle = "solid";
        zcw1div.borderwidth = "5px";
        zcw1div.style.left = "20px";
        zcw1div.style.top = "200px";
        zcw1div.style.width = "70px";
        zcw1div.style.cursor = "pointer";
        zcw1div.style.fontsize = "10px";
        zcw1div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(zcw1div);
        
        var zacw1div = document.createElement('div');
        zacw1div.innerHTML = "<div id='zacw1' onclick='turnit(" + zacw + " , 1)" + ";'>Z-ACW1</div>";
        zacw1div.style.border = "2px solid grey";
        zacw1div.style.background = "lightgrey";
        zacw1div.style.position = "absolute";
        zacw1div.borderstyle = "solid";
        zacw1div.borderwidth = "5px";
        zacw1div.style.left = "110px";
        zacw1div.style.top = "200px";
        zacw1div.style.width = "70px";
        zacw1div.style.cursor = "pointer";
        zacw1div.style.fontsize = "10px";
        zacw1div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(zacw1div);
               
        var zcw2div = document.createElement('div');
        zcw2div.innerHTML = "<div id='zcw2' onclick='turnit(" + zcw + " , 2)" + ";'>Z-CW2</div>";
        zcw2div.style.border = "2px solid grey";
        zcw2div.style.background = "lightgrey";
        zcw2div.style.position = "absolute";
        zcw2div.borderstyle = "solid";
        zcw2div.borderwidth = "5px";
        zcw2div.style.left = "20px";
        zcw2div.style.top = "230px";
        zcw2div.style.width = "70px";
        zcw2div.style.cursor = "pointer";
        zcw2div.style.fontsize = "10px";
        zcw2div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(zcw2div);
        
        var zacw2div = document.createElement('div');
        zacw2div.innerHTML = "<div id='zacw2' onclick='turnit(" + zacw + " , 2)" + ";'>Z-ACW2</div>";
        zacw2div.style.border = "2px solid grey";
        zacw2div.style.background = "lightgrey";
        zacw2div.style.position = "absolute";
        zacw2div.borderstyle = "solid";
        zacw2div.borderwidth = "5px";
        zacw2div.style.left = "110px";
        zacw2div.style.top = "230px";
        zacw2div.style.width = "70px";
        zacw2div.style.cursor = "pointer";
        zacw2div.style.fontsize = "10px";
        zacw2div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(zacw2div);
                     
        var zcw3div = document.createElement('div');
        zcw3div.innerHTML ="<div id='zcw3' onclick='turnit(" + zcw + " , 3)" + ";'>Z-CW3</div>";
        zcw3div.style.border = "2px solid grey";
        zcw3div.style.background = "lightgrey";
        zcw3div.style.position = "absolute";
        zcw3div.borderstyle = "solid";
        zcw3div.borderwidth = "5px";
        zcw3div.style.left = "20px";
        zcw3div.style.top = "260px";
        zcw3div.style.width = "70px";
        zcw3div.style.cursor = "pointer";
        zcw3div.style.fontsize = "10px";
        zcw3div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(zcw3div);
        
        var zacw3div = document.createElement('div');
        zacw3div.innerHTML = "<div id='zacw3' onclick='turnit(" + zacw + " , 3)" + ";'>Z-ACW3</div>";
        zacw3div.style.border = "2px solid grey";
        zacw3div.style.background = "lightgrey";
        zacw3div.style.position = "absolute";
        zacw3div.borderstyle = "solid";
        zacw3div.borderwidth = "5px";
        zacw3div.style.left = "110px";
        zacw3div.style.top = "260px";
        zacw3div.style.width = "70px";
        zacw3div.style.cursor = "pointer";
        zacw3div.style.fontsize = "10px";
        zacw3div.style.textalign = "center";
               
        document.getElementsByTagName('body')[0].appendChild(zacw3div);
             
             
        
       
               
    }
    
}
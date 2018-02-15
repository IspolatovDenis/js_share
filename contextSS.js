//Create container:
custom_context=document.createElement('div');
custom_context.className="custom_context";
document.getElementsByTagName("body")[0].appendChild(custom_context);

custom_context_sub=document.createElement('div');
custom_context_sub.className="custom_context";
document.getElementsByTagName("body")[0].appendChild(custom_context_sub);
var sub_context_Y=0;
var sub_context_X=0;
var sub_context_W=280;
var custom_context_sub_groupId;

//Create Stylesheet:
var style = document.createElement('style');
style.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(style);
style.innerHTML=`
      .custom_context{
        background: #fff;
        border: 1px solid #ccc;
        -webkit-box-shadow: 3px 3px 5px -1px rgba(0,0,0,0.65);
        position:absolute;
        display:none;
        padding-top: 3px;
        padding-bottom: 3px;
      }
      .list_element:not(hr){
        display: table-row;
        left:50px;
        height: 22px;
        font: 8.8pt sans-serif; 
      }
      hr.list_element{
        display: table-row;
        left:50px;
        height: 5px;
        font: 8.8pt sans-serif; 
      }
      .list_element:not(hr):hover{
        background:#eef;
        cursor:default;
      }
      .list_text{
        display: table-cell;
        padding-left: 5px;
        padding-right: 15px;
        padding-top: 5px;
      }
      .list_shortcut{
        display: table-cell;
        color:#999;
        padding-right: 20px;
        white-space: nowrap;
      }
      .list_icon{
          background: url();
          background-size: 100% 100% !important;
          width: 13px;
          height: 13px;
          margin-left: 23px;
        }
      .hr_css{
        display: table-cell;
        border-bottom: 1px solid #ededed;
      }
`;

var context_X, context_Y,Mouse_x,Mouse_y,mouseDown;
//var context_W = parseFloat(custom_context.style.width.replace("px",""));
var context_W = 333;

//Remove default context menu and show custom 
 blockContextMenu = function (evt) {
    evt.preventDefault();
    custom_context.style.left=(context_X=Mouse_x)+"px";
    custom_context.style.top=(context_Y=Mouse_y)+"px";
    custom_context.style.display="table";
    custom_context.innerHTML="";
    custom_context_sub.innerHTML="";
    showMenu();
  };
  window.addEventListener('contextmenu', blockContextMenu, false);

//Capture mouse coordinates:
document.captureEvents(Event.MOUSEMOVE);
document.onmousemove = function(e) {
    Mouse_x = e.pageX;
    Mouse_y = e.pageY;
}

//Hide context box if mouse click outside the box:
document.onmousedown = function(e) { 
   if((Mouse_x<context_X)||(Mouse_y<context_Y)||(Mouse_y>context_Y+(parseFloat(custom_context.offsetHeight)))||(Mouse_x>context_X+context_W)){
   custom_context.style.display="none";
   }
   
  if((Mouse_x<sub_context_X)||(Mouse_y<sub_context_Y)||(Mouse_y>sub_context_Y+(parseFloat(custom_context_sub.offsetHeight)))||(Mouse_x>sub_context_X+sub_context_W)){
   custom_context_sub.style.display="none";
   }
}

//USING:
//Create items function:
//showMenu=function(){
//createMenuItem( <Group Id: number>, <Item text: string>, <Item 'hotkey' text: string> OR <'&sub' string to create submenu>, <Item icon:string (pictrure url)>, <Callback: function>);
//}

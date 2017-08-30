var menus = document.getElementsByClassName("menu-head");
var open_menu;
for(var i=0;i<menus.length;i++){
     let menu = menus[i];
     menu.addEventListener("click",toggleMenu);
     menu.sub_menu = menu.querySelector(".sub-menu").querySelector("ul");
     menu.close = function(){
          this.sub_menu.style.height = null;
          if(open_menu===this){
               open_menu = null;
          }
     }
     menu.open = function(){
          this.sub_menu.style.height = this.sub_menu.scrollHeight+"px";
          open_menu = this;
     }
     menu.toggle = function(){
          toggleState(this.sub_menu,"open","close");
     }
}
function toggleMenu(){
     var sub_menu = this.querySelector(".sub-menu").querySelector("ul");
     if(toggleState(sub_menu,"open","close")=="open"){
          if(open_menu){
               open_menu.toggle();
               open_menu.close();
          }
          this.open();
     }else{
          this.close();
     }
}
function toggleState(elem, open, close){
     var state =elem.getAttribute("data-state")==open?close:open
     elem.setAttribute("data-state", state);
     return state;
}
/*window.onclick = function(event){
     if(!event.target.matches(".menu-head a")){
          if(open_menu){
               open_menu.toggle();
               open_menu.close();
               open_menu = null;
          }
     }
}*/
window.addEventListener("click",function(event){
     if(!event.target.matches(".menu-head a")){
          if(open_menu){
               open_menu.toggle();
               open_menu.close();
               open_menu = null;
          }
     }
});
window.addEventListener("resize",function(event){
     if(open_menu){
          open_menu.toggle();
          open_menu.close();
          open_menu = null;
     }
});

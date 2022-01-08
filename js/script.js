let feature_box = document.getElementById("feature-box-id");
let feature_subbox_collection = document.getElementsByClassName("feature-sub-box");
let feature_subbox = feature_subbox_collection[0];
let feature_btn_next = document.getElementById("feature-btn-next");
let feature_btn_pervious=document.getElementById("feature-btn-previous");
let time=30;
feature_btn_next.addEventListener("click",()=>{

    feature_box.scrollLeft+=(feature_subbox.offsetWidth*4);
})

feature_btn_pervious.addEventListener("click", () => {
  feature_box.scrollLeft -= (feature_subbox.offsetWidth*4);
});

let scroll_point_ahead=true;
let previous_point=0;

setInterval(()=>{
if((feature_box.scrollLeft<feature_box.scrollWidth) && (scroll_point_ahead==true)){
    feature_box.scrollLeft+=1;
    if(previous_point==feature_box.scrollLeft){
        scroll_point_ahead=false;
    }
    
    previous_point = feature_box.scrollLeft;
}
if(scroll_point_ahead==false){
    feature_box.scrollLeft-=1;
    if (feature_box.scrollLeft==0) {
      scroll_point_ahead = true;
    }
}
},time)
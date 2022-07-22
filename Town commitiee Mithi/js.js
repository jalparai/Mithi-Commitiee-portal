var container=document.getElementById("one")

var div = document.createElement("div")
div.setAttribute("class","_card_1row")

var img=document.createElement("img")
img.setAttribute("src","./images/download (3).jpg")
img.setAttribute("style","width:250px;height:100px;")
img.setAttribute("class","_issuse_img")

var div_2=document.createElement("div")
div_2.setAttribute("class","_desribe")
var h3=document.createElement("h3")
h3.setAttribute("class","_innerhead")
h3.innerHTML="ISSUE:"

var span=document.createElement("span")
span.setAttribute("class","_answer_dsrb")
span.innerHTML="Water Problem"

var span_2=document.createElement("span")
span_2.innerHTML="status"

var span_2_3=document.createElement("span")
span_2_3.innerHTML="Pedding"
span_2_3.setAttribute("class","_answer_dsrb")

var br_1=document.createElement("br")

var span_2_4=document.createElement("span")
span_2_4.innerHTML="Description:"
 var span_3=document.createElement("span")
 span_3.innerHTML="In Details"

 var br_2=document.createElement("br")

 var button=document.createElement("button")
 button.setAttribute("onclick","details()")
 button.setAttribute("class","_del_btn")
 button.innerHTML="Details"


 function details(){
     window.location.href="./detailes/details.html"
 }


 div.appendChild(img)
 div.appendChild(div_2)
 div_2.appendChild(h3)
 h3.appendChild(span)
 div_2.appendChild(span_2)
 span_2.appendChild(span_2_3)
 div_2.appendChild(br_1)
 div_2.appendChild(span_2_4)
 span_2_4.appendChild(span_3)
 div_2.appendChild(br_2)
 div_2.appendChild(button)

container.appendChild(div)


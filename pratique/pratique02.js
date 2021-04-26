function afficherDate1(){
   let d = new Date();
   let date  = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
   document.write("<p>Nous sommes le " + date + ".</p>");            
}

function afficherDate2(){
   let d = new Date();
   let date  = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
   document.getElementById("date2").innerHTML="<p>Nous sommes le "+date+".</p>";            
}

function afficherDate3(){
   let d = new Date();
   let date  = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
   document.getElementById("date3").appendChild(document.createTextNode("Nous sommes le "+date+"."));            
}
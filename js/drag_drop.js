 var data =[{"id":1,"first_name":"Braden","last_name":"Eich","email":"beich0@chronoengine.com","gender":"Male","ip_address":"187.45.36.85"},
 {"id":2,"first_name":"Anatollo","last_name":"Prin","email":"aprin1@toplist.cz","gender":"Male","ip_address":"78.127.185.201"},
 {"id":3,"first_name":"Duffie","last_name":"Ambroziak","email":"dambroziak2@go.com","gender":"Male","ip_address":"219.245.3.43"},
 {"id":4,"first_name":"Arv","last_name":"Hodinton","email":"ahodinton3@blogtalkradio.com","gender":"Male","ip_address":"169.143.146.149"},
 {"id":5,"first_name":"Nonnah","last_name":"Reilinger","email":"nreilinger4@dagondesign.com","gender":"Female","ip_address":"19.80.78.88"},
 {"id":6,"first_name":"Brandon","last_name":"Cardello","email":"bcardello5@google.pl","gender":"Male","ip_address":"169.5.211.37"},
 {"id":7,"first_name":"Rodrigo","last_name":"Silverthorne","email":"rsilverthorne6@ameblo.jp","gender":"Male","ip_address":"222.59.27.138"},
 {"id":8,"first_name":"Ely","last_name":"Samson","email":"esamson7@mediafire.com","gender":"Male","ip_address":"178.79.164.47"},
 {"id":9,"first_name":"Johnathan","last_name":"Potticary","email":"jpotticary8@fema.gov","gender":"Male","ip_address":"85.4.238.121"},
 {"id":10,"first_name":"Lorri","last_name":"Hawkin","email":"lhawkin9@youku.com","gender":"Female","ip_address":"118.68.98.27"},
 {"id":11,"first_name":"Kati","last_name":"Birdseye","email":"kbirdseyea@smugmug.com","gender":"Female","ip_address":"125.151.12.221"},
 {"id":12,"first_name":"Gran","last_name":"Yanyushkin","email":"gyanyushkinb@cocolog-nifty.com","gender":"Male","ip_address":"8.92.96.45"},
 {"id":13,"first_name":"Thebault","last_name":"Braybrookes","email":"tbraybrookesc@delicious.com","gender":"Male","ip_address":"108.229.156.88"},
 {"id":14,"first_name":"Christy","last_name":"Claricoats","email":"cclaricoatsd@ebay.co.uk","gender":"Female","ip_address":"99.93.61.221"},
 {"id":15,"first_name":"Aarika","last_name":"Crippill","email":"acrippille@furl.net","gender":"Female","ip_address":"228.22.171.59"},
 {"id":16,"first_name":"Geno","last_name":"Mounter","email":"gmounterf@mail.ru","gender":"Male","ip_address":"21.254.225.215"},
 {"id":17,"first_name":"Natale","last_name":"Chill","email":"nchillg@harvard.edu","gender":"Male","ip_address":"240.5.142.247"},
 {"id":18,"first_name":"Janeczka","last_name":"Blowes","email":"jblowesh@smugmug.com","gender":"Female","ip_address":"90.17.255.195"},
 {"id":19,"first_name":"Cornelle","last_name":"Petrol","email":"cpetroli@dion.ne.jp","gender":"Female","ip_address":"65.152.160.251"},
 {"id":20,"first_name":"Derick","last_name":"Millin","email":"dmillinj@toplist.cz","gender":"Male","ip_address":"210.202.221.231"},
 {"id":21,"first_name":"Homer","last_name":"Parlet","email":"hparletk@theguardian.com","gender":"Male","ip_address":"46.233.3.72"},
 {"id":22,"first_name":"Sanderson","last_name":"Linklet","email":"slinkletl@twitpic.com","gender":"Male","ip_address":"75.67.71.96"},
 {"id":23,"first_name":"Horst","last_name":"Gyles","email":"hgylesm@so-net.ne.jp","gender":"Male","ip_address":"207.51.68.89"},
 {"id":24,"first_name":"Frederick","last_name":"Tunnadine","email":"ftunnadinen@cnet.com","gender":"Male","ip_address":"142.208.64.30"},
 {"id":25,"first_name":"Joscelin","last_name":"Gritland","email":"jgritlando@webmd.com","gender":"Female","ip_address":"185.126.106.130"},
 {"id":26,"first_name":"Horatius","last_name":"Vickers","email":"hvickersp@cyberchimps.com","gender":"Male","ip_address":"121.104.236.194"},
 {"id":27,"first_name":"Alberta","last_name":"Flaxon","email":"aflaxonq@people.com.cn","gender":"Female","ip_address":"138.118.240.61"},
 {"id":28,"first_name":"Bret","last_name":"Orneblow","email":"borneblowr@cam.ac.uk","gender":"Male","ip_address":"135.33.167.87"},
 {"id":29,"first_name":"Ophelia","last_name":"Boak","email":"oboaks@cdc.gov","gender":"Female","ip_address":"91.126.82.67"},
 {"id":30,"first_name":"Lelia","last_name":"Nagle","email":"lnaglet@desdev.cn","gender":"Female","ip_address":"111.241.10.102"},
 {"id":31,"first_name":"Elaine","last_name":"Ambrozik","email":"eambroziku@army.mil","gender":"Female","ip_address":"69.0.43.130"}];
    
      console.log("Hello world!"+data[1].first_name);
        var list = document.getElementById('data');
        for(var i = 0;i < data.length; i++)
        {
            list.innerHTML = list.innerHTML + "<div class='droptarget' draggable='true'  id="+data[i].id+">"+ data[i].first_name +" "+data[i].last_name +"</div>" + "<br>";
            var idd = data[i].id; 
        } 
        console.log("Hello wodfggrld!"+idd);


     document.addEventListener("dragstart", function(event) {
      // The dataTransfer.setData() method sets the data type and the value of the dragged data
        event.dataTransfer.setData("Text", event.target.id);
        event.target.style.opacity = "0.4";
     });
  
       document.addEventListener("drag", function(event) {
      
    });
     document.addEventListener("dragend", function(event) {
      // document.getElementById("demo").innerHTML = "Finished dragging the p element.";
        event.target.style.opacity = "1";
    });
  
     // When the draggable p element enters the droptarget, change the DIVS's border style
    document.addEventListener("dragenter", function(event) {
      if ( event.target.className == "droptarget1" ) {
        event.target.style.border = "3px dotted green";
      }
    });
     // By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
     document.addEventListener("dragover", function(event) {
         event.preventDefault();
     });
    // When the draggable p element leaves the droptarget, reset the DIVS's border style
     document.addEventListener("dragleave", function(event) {
       if ( event.target.className == "droptarget1" ) {
           event.target.style.border = "";
        }
     });
  
     document.addEventListener("drop", function(event) {
       event.preventDefault();
        if ( event.target.className == "droptarget1" ) {
        event.target.style.border = "";
        var dataOne = event.dataTransfer.getData("Text");
        console.log(dataOne);
        event.target.appendChild(document.getElementById(dataOne));
        var btn = document.createElement("div");  
        btn.innerHTML = 'X';
        console.log ("inside drop",event.target.id);
        btn.setAttribute('id',"remove"+event.target.id);
        btn.setAttribute('style', 'margin-top: -71px;float: right;margin-right: 36px;background-color: #27bbce;padding: 1%;');
        btn.setAttribute('onclick','cancelItem(event)');
        event.target.appendChild(btn);
        }
   });
  
    function cancelItem(event)
    {
       var r = document.getElementById(event.target.id).previousElementSibling;
       console.log( r);
       list.appendChild(r);
       document.getElementById(event.target.id).remove();
   }
  
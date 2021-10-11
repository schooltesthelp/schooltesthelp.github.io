$('#url').keypress( function( e ) {
    var code = e.keyCode || e.which;
      
    if( code === 13 ) {
      e.preventDefault();
      
      
      var link = document.getElementById("url").value;
      var raw1;
      var raw2;
      var raw;
        if (link.includes("https://") == true) {
          link = document.getElementById("url").value;
          raw1 = link;
          raw2 = raw1.split("/");
          raw = raw2[2];
        } else {
            link = 'https://' + document.getElementById("url").value;
            raw = document.getElementById("url").value;
            if (document.getElementById("url").value.includes("/") == true) {
                raw1 = document.getElementById("url").value;
              raw2 = raw1.split("/");
              raw = raw2[0];
            }
        }
      // var link = 'https://' + document.getElementById("url").value;
      console.log(link);
      console.log(raw);
      
      
      fetch('https://schooltesthelp.000webhostapp.com/findcert.php?link=' + raw)
    .then(response => response.json())
    .then(json => {
    
    console.log(json);
    if (json.result !== "1") {
    document.getElementById("iframe-holder").innerHTML = "<h1>DANGER!</h1><p>The page you are accessing is not secure. This website will not be shown on SafeSearch until it gets secure.</p>";
    
    } else {
    
    
      
      
      
      
      
      
      
      
    
  fetch('https://schooltesthelp.000webhostapp.com/x-frame.php?link=' + link)
    .then(response => response.json())
    .then(data => {
    
    console.log(data.error);
    
    if (data.error == true) {
    document.getElementById("iframe-holder").innerHTML = '<iframe src="' + link + '" is="x-frame-bypass" id="iframe-result" style="width: 100%; height: 600px; overflow: auto;"></iframe>';
    } else {
        document.getElementById("iframe-holder").innerHTML = '<iframe src="' + link + '" id="iframe-result" style="width: 100%; height: 600px; overflow: auto;"></iframe>';
    }
    });
  
      
    }
  })
      
      
      }
    });




    if('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/safesearch/sw.js');
    };

    
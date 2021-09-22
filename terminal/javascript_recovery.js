// Interface

$('body').terminal({
  help: function() {
    this.echo('Use the commands to continue with this terminal:\n\njoin <id>: join a quiz\nrestart: restart this quiz\nnew: create new form');
  },
  restart: function() {
  	this.echo("Reloading Server...");
    this.echo(window.location.href = window.location.href);
  },
  join: function(id) {
  	this.echo("Joining quiz...");
    this.echo(window.location.href = 'https://schooltesthelp.000webhostapp.com/join.php?id=' + id);
  },
  new: function() {
  	this.echo("Creating new form...");
    this.echo(window.location.href = 'https://schooltesthelp.000webhostapp.com/creator');
  },
}, {
  greetings: 'SchoolTestHelp Terminal has loaded.\n(c) Copyright Greatly Gravitate Systems. All Rights Reserved.\nType help for a list of commands'
});

// Menu
// JAVASCRIPT (jQuery)

// Trigger action when the contexmenu is about to be shown
$(document).bind("contextmenu", function (event) {
    
    // Avoid the real one
    event.preventDefault();
    
    // Show contextmenu
    $(".custom-menu").finish().toggle(100).
    
    // In the right position (the mouse)
    css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
});


// If the document is clicked somewhere
$(document).bind("mousedown", function (e) {
    
    // If the clicked element is not the menu
    if (!$(e.target).parents(".custom-menu").length > 0) {
        
        // Hide it
        $(".custom-menu").hide(100);
    }
});


// If the menu element is clicked
$(".custom-menu li").click(function(){
    
    // This is the triggered action name
    switch($(this).attr("data-action")) {
        
        // A case for each action. Your actions here
        case "first": window.location.href = window.location.href;
; break;
        
    }
  
    // Hide it AFTER the action was triggered
    $(".custom-menu").hide(100);
  });

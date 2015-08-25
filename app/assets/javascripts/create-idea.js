function prependIdea(idea){
  $('.ideas').prepend(
    "<div class='row row-centered'>"
    + "<div class='col-lg-8 col-centered' data-id=" + idea.id + ">"
    + "<h2>" + idea.title + "</h2>"
    + "<p>" + idea.body + "</p>"
    + "<p>" + idea.quality + "</p>"
    + "</div></div>"
  )
}


//var newIdea = {
//  createIt: function() {
//    $('#create-idea').on('click', function() {
//      var ideaParams = {
//        title: $('#idea-title').val(),
//        body: $('#idea-body').val()
//      };
//      newIdea.postIt(ideaParams);
//    });
//  },
//
//  postIt: function(ideaParams) {
//    $.post('/ideas', ideaParams).then(function(idea) {
//      prependIdea(idea);
//    });
//  }
//};
//
//$(document).ready(newIdea.createIt());


//function createIdea() {
//  var ideaParams = {
//    title: $('#idea-title').val(),
//    body: $('#idea-body').val()
//  };
//
//  $.post('/ideas', ideaParams).then(function(idea) {
//    prependIdea(idea);
//  });
//}

$(document).ready(function(){
  $('#create-idea').on('click', function() {
    var ideaParams = {
      title: $('#idea-title').val(),
      body: $('#idea-body').val()
    };
    //debugger
    $.post('/ideas', ideaParams).done(function(idea) {
      prependIdea(idea);
    });
  });
});

$(document).ready(function(){
  createIdea();
  deleteIdea();
});

function prependIdea(idea){
  $('.ideas').prepend(
    "<div class='row row-centered'>"
    + "<div class='col-lg-8 col-centered' data-id=" + idea.id + ">"
    + "<h2><a href='' onclick='return false' class='delete-idea'>(X)</a>" + idea.title + "</h2>"
    + "<p>" + idea.body + "</p>"
    + "<p>" + idea.quality + "</p>"
    + "</div></div>"
  )
}

function createIdea() {
  $('#create-idea').on('click', function() {
    var ideaParams = {
      title: $('#idea-title').val(),
      body: $('#idea-body').val()
    };

    $.post('/ideas', ideaParams).then(function(idea) {
      prependIdea(idea);
    });
  });
}

function deleteIdea() {
  $('.delete-idea').on('click', function() {
    var rowDiv = $(this).closest('.row');
    var ideaId = $(this).parent().parent().data().id;

    $.ajax({
      method: "DELETE",
      url: "/ideas/" + ideaId,
      data: {id: ideaId}
    }).then(function() {
      rowDiv.remove();
    }, function(data){
      if (data.status == 200) {
        rowDiv.remove();
      }
    });
  });
}

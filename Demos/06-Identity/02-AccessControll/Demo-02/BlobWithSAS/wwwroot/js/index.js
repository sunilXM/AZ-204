function getRecords() {
  $.get(
    "api/PatientRecords",
    function (data) {
      $("#result").empty();
      $.each(data, function (i, v) {
        $("#result").html($("#result").html() + "<p>" + v.name + "<p/>");
      });
      $("#result").addClass("alert alert-success");
    },
    "json"
  );
}

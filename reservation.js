"use strict";

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		
$("#arrival_date").focus();

$("#reservation_form").submit((event) => {
    let isValid = true;

    // Here we are validating the email by first checking the value to be null and them matching the pattern with the emailPattern
    const email = $("#email").val().trim();
    if (email == "") {
      $("#email").next().text("This field is required.");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      $("#email").next().text("Must be a valid email address.");
      isValid = false;
    } else {
      $("#email").next().text("");
    }
    $("#email").val(email);

	const verify = $("#days").val().trim();
    if (verify == "") {
      $("#days").next().text("This field is required.");
      isValid = false;
    } else if (isNaN(verify)) {
      $("#days").next().text("Must be a number.");
      isValid = false;
    } else {
      $("#days").next().text("");
    }
    $("#verify").val(verify);

	if (!$("#name").attr("disabled")) {
		const r_name = $("#name").val().trim();
		if (r_name == "") {
		  $("#name").next().text("This field is required.");
		  isValid = false;
		} else {
		  $("#name").next().text("");
		}
		$("#name").val(r_name);
	  }

	  if (!$("#pickup_date").attr("disabled")) {
		const a_date = $("#pickup_date").val().trim();
		if (a_date == "") {
		  $("#pickup_date").next().text("This field is required.");
		  isValid = false;
		} else {
		  $("#pickup_date").next().text("");
		}
		$("#pickup_date").val(a_date);
	  }  

	  const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const phone = $("#phone").val().trim();
    if (phone == "") {
      $("#phone").next().text("This field is required.");
      isValid = false;
    } else if (!phonePattern.test(phone)) {
      $("#phone")
        .next()
        .text("Phone number should be in the format: 999-999-9999");
      isValid = false;
    } else {
      $("#phone").next().text("");
    }
    $("#phone").val(phone);
	if (isValid == false) {
		event.preventDefault();
	  }
	});
}); // end ready
  // Initialize the modal using JavaScript
  var myModal = new bootstrap.Modal(document.getElementById('createNewPost'));

  // Get the button element that triggers the modal
  var modalTriggerBtn = document.getElementById('modalTriggerBtn');

  // Add an event listener to the button to show the modal
  modalTriggerBtn.addEventListener('click', function () {
    myModal.show();
  });

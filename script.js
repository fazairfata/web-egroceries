
var submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", function(event) {
  var nameValue = document.getElementById("name").value
  var emailValue = document.getElementById("email").value
  var phoneValue = document.getElementById("phone").value
  var messageValue = document.getElementById("message").value
  nameValidation(nameValue, emailValue, phoneValue, messageValue)
})

function nameValidation(name, email, phone, message) {
  if (name != "" && email != "" && phone != "") {
    alert("Berhasil")
  } else if (name == "") {
    alert("Masukkan nama anda")
  } else if (email == "") {
    alert("Masukkan email anda")
  } else if (phone == "") {
    alert("Masukkan nomor telepon anda")
  }
}

var slideIndex = 1;
setInterval(function() {
  plusDivs(1);
}, 2000);

function plusDivs(index) {
  showImage(slideIndex += index)
}

function showImage(index){
  const imgList = document.getElementsByClassName("slider");
  var i;
  if (index > imgList.length) { slideIndex = 1; }
  if (index < 1) { slideIndex = imgList.length; }
  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }
  imgList[slideIndex - 1].style.display = "flex";
}



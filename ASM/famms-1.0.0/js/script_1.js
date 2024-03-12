const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
var username = document.querySelector(".username");
var email = document.querySelector(".email");
var password = document.querySelector(".password");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

function showError(input, message) {
  input.classList.add("show-error");
}

function showSucces(input) {
  input.classList.remove("show-error");
}

const getData = (listInput) => {
  const user = {
    username: listInput[0].value,
    email: listInput[1].value,
    password: listInput[2].value,
  };
  saveToLocalStorage(user);
};

const checkEmptyError = (listInput) => {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();

    if (!input.value) {
      isEmptyError = true;
      showError(input, "Can Not Let Be Blank");
    } else {
      showSucces(input);
    }
  });
  return isEmptyError;
};

const saveToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

saveToLocalStorage()
document.querySelector("#signUpForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  if (!checkEmptyError([username, email, password])) {
    getData([username, email, password]);
    // Hide the sign-up form
    document.querySelector("#signUpForm").style.display = "none";
    // Show the sign-in form
    document.querySelector("#signInForm").style.display = "block";
  }
});

document.querySelector("#signUpForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của form

  var form = document.querySelector("#signUpForm");
  form.style.position = "relative";
  form.style.left = "0px";

  var id = setInterval(frame, 5); // Tốc độ di chuyển
  function frame() {
    var left = parseInt(form.style.left, 10);
    if (left == -1000) { // Điểm dừng cuối cùng
      clearInterval(id);
    } else {
      form.style.left = left - 1 + "px"; // Di chuyển sang trái
    }
  }
});




function showError(input, message) {
  input.classList.add("show-error");
}

function showSucces(input) {
  input.classList.remove("show-error");
}

const getDataList = (listInput) => {
  const user = {
    email: listInput[0].value,
    password: listInput[1].value,
  };
  saveToLocalStorage(user);
};

const checkEmptyErrorSignIn = (listInput) => {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();

    if (!input.value) {
      isEmptyError = true;
      showError(input, "Can Not Let Be Blank");
    } else {
      showSucces(input);
    }
  });
  return isEmptyError;
};
``
const saveToLocalStorageSignIn = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

document.querySelector("#signInForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const Email = document.querySelector("#Email");
  const Password = document.querySelector("#Password");
  if (!checkEmptyErrorSignIn([Email, Password])) {
    getDataList([Email, Password]);
    window.location.href = "index.html";
  }
});


uu

// document.querySelector("#signInForm").addEventListener("submit", function (event) {
//   event.preventDefault();
//   const Email = document.querySelector("#Email");
//   const Password = document.querySelector("#Password");
//   if (!checkEmptyErrorSignIn([Email, Password])) {
//     firebase.auth().signInWithEmailAndPassword(Email.value, Password.value)
//       .then((userCredential) => {
//         var user = userCredential.user;
//         console.log("User signed in: ", user);
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log("Error signing in: ", errorCode, errorMessage);
//       });
//   }
// });




// var inputs = this.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
// var allFilled = true;

// for (var i = 0; i < inputs.length; i++) {
//     if (inputs[i].value === '') {
//         allFilled = false;
//         alert('Please fill out all fields');
//         break;
//     }
// }

// if (allFilled) {
//     this.submit(); // If all fields are filled, submit the form
// }

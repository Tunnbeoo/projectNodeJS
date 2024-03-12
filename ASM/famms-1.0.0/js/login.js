const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Hàm xác thực form đăng nhập
const validateLoginForm = () => {
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      // Kiểm tra xem người dùng đã nhập cả email và mật khẩu chưa
      if (!email || !password) {
        alert("Vui lòng nhập cả email và mật khẩu.");
        return false;
      }

      // Kiểm tra định dạng email
      let emailRegex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
      if (!emailRegex.test(email)) {
        alert("Email không hợp lệ. Vui lòng nhập một địa chỉ Gmail.");
        return false;
      }

      // Kiểm tra độ dài mật khẩu và có ít nhất 1 ký tự viết hoa
      let passwordRegex = /^(?=.*[A-Z]).{8,}$/;
      if (!passwordRegex.test(password)) {
        alert(
          "Mật khẩu không hợp lệ. Mật khẩu phải có ít nhất 8 ký tự và bao gồm ít nhất 1 ký tự viết hoa."
        );
        return false;
      }

      alert("Form hợp lệ. Bạn có thể tiếp tục gửi form.");
      return true;
    });
};

// Tạo form đăng nhập và thêm xác thực
createLoginForm();
validateLoginForm();

// Hàm tạo form đăng ký
const createSignUpForm = () => {
  let formContent = `
        <form id="signUpForm">
            <h1>Create Account</h1>
            <div class="social-icons">
                <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" id="name" placeholder="Name">
            <input type="email" id="email" placeholder="Email">
            <input type="password" id="password" placeholder="Password">
            <button type="submit">Sign Up</button>
        </form>`;
  document.getElementById("formContainer").innerHTML = formContent;
};

// Hàm xác thực form đăng ký
const validateSignUpForm = () => {
  document
    .getElementById("signUpForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      // Kiểm tra xem người dùng đã nhập cả tên, email và mật khẩu chưa
      if (!name || !email || !password) {
        alert("Vui lòng nhập cả tên, email và mật khẩu.");
        return false;
      }

      // Kiểm tra định dạng email
      let emailRegex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
      if (!emailRegex.test(email)) {
        alert("Email không hợp lệ. Vui lòng nhập một địa chỉ Gmail.");
        return false;
      }

      // Kiểm tra độ dài mật khẩu và có ít nhất 1 ký tự viết hoa
      let passwordRegex = /^(?=.*[A-Z]).{8,}$/;
      if (!passwordRegex.test(password)) {
        alert(
          "Mật khẩu không hợp lệ. Mật khẩu phải có ít nhất 8 ký tự và bao gồm ít nhất 1 ký tự viết hoa."
        );
        return false;
      }

      alert("Form hợp lệ. Bạn có thể tiếp tục gửi form.");
      return true;
    });
};

// Tạo form đăng ký và thêm xác thực
createSignUpForm();
validateSignUpForm();

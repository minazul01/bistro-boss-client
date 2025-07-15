import { useContext, useEffect, useState } from "react";
import Banner from "../../assets/others/Authentication2.png";
import background from "../../assets/reservation/background.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Context/AuthProvider/Provider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  console.log(location.state)
  const { signInUser } = useContext(AuthContext);
  // disable login btn
  const [disabled, setDisabled] = useState(true);
  // captcha number
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // login submit func
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          title: "Login!",
          icon: "success",
          draggable: true,
        });
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
    setError(""); // reset previous errors
  };

  const handleValidateCapcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="max-w-[1550px] mx-auto w-full bg-cover bg-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-20 py-20 shadow-2xl rounded-md  ">
        {/* Banner Side */}
        <div className="hidden md:block md:w-1/2 h-full">
          <img
            src={Banner}
            alt="Login Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Login Form Side */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-12">
          <div className="w-full max-w-md p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Login to Your Account
            </h2>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email */}
              <fieldset className="w-full">
                <legend className="text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </legend>
                <input
                  className="border-gray-300 text-black bg-white border rounded-md outline-none px-4 py-3 w-full focus:border-primary transition-colors duration-300"
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  required
                />
              </fieldset>

              {/* Password */}
              <fieldset className="w-full">
                <legend className="text-sm font-medium text-gray-700 mb-1">
                  Your Password
                </legend>
                <input
                  className="border-gray-300 text-black bg-white border rounded-md outline-none px-4 py-3 w-full focus:border-primary transition-colors duration-300"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </fieldset>

              {/* CAPTCHA */}
              <LoadCanvasTemplate />

              <fieldset className="w-full">
                <input
                  onBlur={handleValidateCapcha}
                  className="border-gray-300 text-black bg-white border rounded-md outline-none px-4 py-3 w-full focus:border-primary transition-colors duration-300"
                  name="captcha"
                  type="text"
                  placeholder="Write captcha"
                  required
                />
              </fieldset>
              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
              {/* Submit */}
              <br />
              <input
                type="submit"
                disabled={disabled}
                className={`${
                  disabled ? "w-full btn btn-soft" : "w-full btn btn-primary"
                }`}
                value="Login"
              />
            </form>

            {/* Social Login */}
            <div className="text-center mt-6">
              <p className="text-gray-600 mb-3">Or login with</p>
              <div className="flex justify-center gap-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-sm">
                  Google
                </button>
                <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition text-sm">
                  Facebook
                </button>
              </div>
            </div>

            {/* Register Link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

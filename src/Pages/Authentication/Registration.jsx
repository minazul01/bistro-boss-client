import { useContext, useState } from "react";
import SignUpBanner from "../../assets/others/Authentication2.png";
import background from "../../assets/reservation/background.png";
import { AuthContext } from "../../Context/AuthProvider/Provider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Registration = () => {
  const [error, setError] = useState('');
  const { signUpUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // console.log(name, email, password, confirmPassword);
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

    if (!passwordRegex.test(password)) {
      return alert(
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one special character."
      );
    }
    signUpUser(email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      Swal.fire({
        title: "Drag me!",
        icon: "success",
        draggable: true,
      });

      navigate("/");
    });
  };

  return (
    <section
      style={{ backgroundImage: `url(${background})` }}
      className="max-w-[1550px] mx-auto w-full bg-cover bg-center"
    >
      <div className="container mx-auto pt-30 pb-10 flex flex-col md:flex-row items-center justify-center p-20 py-30 shadow-2xl rounded-md">
        {/* Banner Side */}
        <div className="hidden md:block md:w-1/2 h-full">
          <img
            src={SignUpBanner}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Registration Form Side */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-12">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Create an Account
            </h2>

            <form onSubmit={handleRegister} className="space-y-4">
              {/* Full Name */}
              <fieldset className="w-full">
                <legend className="text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </legend>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full border bg-white text-black border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </fieldset>

              {/* Email */}
              <fieldset className="w-full">
                <legend className="text-sm font-medium text-gray-700 mb-1">
                  Email
                </legend>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border bg-white text-black border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </fieldset>

              {/* Password */}
              <fieldset className="w-full">
                <legend className="text-sm font-medium text-gray-700 mb-1">
                  Password
                </legend>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full border bg-white text-black border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </fieldset>

              {/* Confirm Password */}
              <fieldset className="w-full">
                <legend className="text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </legend>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full border bg-white text-black border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </fieldset>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </form>

            {/* Social login */}
            <div className="text-center mt-6">
              <p className="text-gray-600 mb-3">Or sign up with</p>
              <div className="flex justify-center gap-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-sm">
                  Google
                </button>
                <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition text-sm">
                  Facebook
                </button>
              </div>
            </div>

            {/* Already have an account */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;

import { useNavigate, Link } from "react-router-dom";
import { FaAmazon } from "react-icons/fa";
import { HiOutlineUser, HiOutlineLockClosed } from "react-icons/hi";
import { useFormik } from "formik";

function LoginPage() {
  function callLoginApi() {
    console.log("Logging in with:", values.username, values.password);
    navigate("/");
  }

  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: callLoginApi,
  });

  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: 'url("/images/loginbg.svg")',
      }}
    >
      <div className="w-full max-w-md flex flex-col px-4 gap-6 text-white">
        <FaAmazon className="text-9xl mb-6 mx-auto" />
        <h1 className="text-2xl font-bold text-center">
          Login to Your Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative flex items-center">
            <HiOutlineUser className="absolute left-3 w-5 h-5 pointer-events-none" />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={values.username}
              onChange={handleChange}
              className="w-full p-3 pl-10 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent rounded placeholder-white"
            />
          </div>
          <div className="relative flex items-center">
            <HiOutlineLockClosed className="absolute left-3 w-5 h-5 pointer-events-none" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="w-full p-3 pl-10 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent rounded placeholder-white"
            />
          </div>
          <div className="text-sm text-center">
            <Link to="/forgot-password" className="hover:underline">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            disabled={!values.username.trim() || !values.password.trim()}
            className="w-full bg-white text-[#38A5FF] py-3 rounded font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
          >
            LOGIN
          </button>
          <div className="text-sm text-center">
            Don't have an account?
            <Link
              to="/signup"
              className="underline hover:underline-offset-2 ml-1"
            >
              SignUp
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

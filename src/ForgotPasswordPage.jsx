import { useNavigate, Link } from "react-router-dom";
import { FaAmazon } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useFormik } from "formik";

function ForgotPasswordPage() {
  function callForgotPasswordApi() {
    console.log("Password reset requested for:", values.email);
    alert(`Password reset link sent to ${values.email}`);
    navigate("/login");
  }

  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: callForgotPasswordApi,
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
        <h1 className="text-2xl font-bold text-center">Reset your password</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-center text-sm">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>

          <div className="relative flex items-center">
            <HiOutlineMail className="absolute left-3 w-5 h-5 pointer-events-none" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full p-3 pl-10 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent rounded placeholder-white bg-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!values.email.trim()}
            className="w-full bg-white text-[#38A5FF] py-3 rounded font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Send Link
          </button>

          <div className="text-sm text-center">
            Remember your password?{" "}
            <Link
              to="/login"
              className="underline hover:underline-offset-2 ml-1"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;

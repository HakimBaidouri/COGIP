import { useState } from "react";

function loginDash() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="font-sans text-gray-900 antialiased">
      <div className="my-30 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div>
          <a href="/">
            <h2 className="font-bold text-4xl uppercase">COGIP Dashboard</h2>
          </a>
        </div>

        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          <form method="POST" action="/login">
            <div className="py-8 text-center">
              <span className="text-2xl font-semibold">Log In</span>
            </div>

            <div>
              <label className="block font-medium text-sm text-gray-700" htmlFor="email">
                Email
              </label>
              <input type="email" name="email" placeholder="Email" className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]" />
            </div>

            <div className="mt-4">
              <label className="block font-medium text-sm text-gray-700" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  required
                  autoComplete="current-password"
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600">
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end mt-4">
              <button
                type="submit"
                className="ms-4 inline-flex items-center px-4 py-2 bg-yellow-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-yellow-600 focus:bg-yellow-700 active:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default loginDash;

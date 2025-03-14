import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterDash() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role_id, setRoleId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const roleIdAsInt = parseInt(role_id);

    try {
      const response = await fetch("http://localhost:3001/cogip/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ first_name, last_name, email, role_id: roleIdAsInt, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur de connexion");
      }

      navigate("/loginDash");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="font-sans text-gray-900 antialiased">
      <div className="my-30 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div>
          <a href="/">
            <h2 className="font-bold text-4xl uppercase">COGIP Dashboard</h2>
          </a>
        </div>

        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="py-8 text-center">
              <span className="text-2xl font-semibold uppercase">Sign Up</span>
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="flex justify-between">
              <div>
                <label className="block font-medium text-sm text-gray-700" htmlFor="first_name">
                  Firstname
                </label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="Firstname"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]"
                />
              </div>

              <div>
                <label className="block font-medium text-sm text-gray-700" htmlFor="last_name">
                  Lastname
                </label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Lastname"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="mt-4">
                <label className="block font-medium text-sm text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]"
                />
              </div>

              <div className="mt-4">
                <label className="block font-medium text-sm text-gray-700" htmlFor="role_id">
                  Role ID
                </label>
                <input
                  type="number"
                  name="role_id"
                  placeholder="Role ID"
                  value={role_id}
                  onChange={(e) => setRoleId(e.target.value)}
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]"
                />
              </div>
            </div>

            {/* <div className="mt-4">
              <label className="block font-medium text-sm text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]"
              />
            </div> */}

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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterDash;

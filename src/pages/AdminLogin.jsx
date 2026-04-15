import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"

function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      await signInWithEmailAndPassword(auth, email, password)

      // Store Admin Session
      localStorage.setItem("adminLoggedIn", "true")

      alert("Login Successful")

      navigate("/admin-dashboard")
    } catch (error) {
      alert("Invalid Credentials")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617]">
      <form
        onSubmit={handleLogin}
        className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl border border-white/10 w-[400px]"
      >
        <h1 className="text-3xl text-cyan-400 font-bold mb-6">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-black/30 text-white outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-black/30 text-white outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-400 py-3 rounded font-semibold transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default AdminLogin
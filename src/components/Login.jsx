import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) return;

    setLoading(true);

    // Simulate async login delay
    setTimeout(() => {
      onLogin(username.trim().toLowerCase());
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-elfonze-accent text-white">
      <form
        onSubmit={handleSubmit}
        className="
          bg-black text-white
          border border-white/30
          rounded-2xl shadow-2xl
          w-full max-w-md p-6 flex flex-col gap-4
          transform translate-y-2 scale-[1.02]
          transition-all duration-500 ease-out animate-fade-in
        "
      >
        <h2 className="text-2xl font-bold text-white text-center">Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={loading}
          className="p-3 rounded-lg bg-black text-white border border-white/30 shadow-inner placeholder-white/70 disabled:opacity-50"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          className="p-3 rounded-lg bg-black text-white border border-white/30 shadow-inner placeholder-white/70 disabled:opacity-50"
        />

        <button
          type="submit"
          disabled={loading}
          className={`
            flex items-center justify-center gap-2
            bg-white hover:bg-elfonze-highlight text-black hover:text-white
            py-2 px-4 rounded-lg transition-colors shadow-lg
            disabled:opacity-60 disabled:cursor-not-allowed
          `}
        >
          {loading ? (
            <>
              <span className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></span>
              Logging in…
            </>
          ) : (
            'Log In'
          )}
        </button>
      </form>
    </div>
  );
}

export default Login;

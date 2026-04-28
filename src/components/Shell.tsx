import { Github, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { PropsWithChildren, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems, profile } from "../data/profile";

export function Shell({ children }: PropsWithChildren) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="min-h-screen bg-[#F7F5EF] text-zinc-900 transition-colors duration-300 dark:bg-ink dark:text-white">
      <div className="site-gradient fixed inset-0 -z-10" />
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-[#F7F5EF]/86 backdrop-blur-xl dark:border-white/10 dark:bg-ink/78">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <NavLink to="/" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-zinc-950 bg-zinc-950 text-sm font-bold text-white shadow-sm transition group-hover:border-cyan-500 dark:border-white dark:bg-white dark:text-zinc-950">
              JH
            </span>
            <span>
              <span className="block text-sm font-semibold">{profile.brandName}</span>
              <span className="block text-xs text-zinc-500 dark:text-zinc-400">Backend / AI</span>
            </span>
          </NavLink>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                      : "text-zinc-600 hover:bg-zinc-900/5 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={`mailto:${profile.emails[0]}`}
              className="icon-button"
              aria-label="发送邮件"
              title="发送邮件"
            >
              <Mail size={18} />
            </a>
            <a
              href={profile.github}
              className="icon-button"
              aria-label="打开 GitHub"
              title="打开 GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
            </a>
            <button
              className="icon-button"
              type="button"
              aria-label="切换深色模式"
              title="切换深色模式"
              onClick={() => setDark((value) => !value)}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <button
            type="button"
            className="icon-button md:hidden"
            aria-label="打开导航"
            title="打开导航"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen ? (
          <div className="border-t border-zinc-200 bg-[#F7F5EF] px-5 py-4 dark:border-white/10 dark:bg-ink md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium ${
                      isActive
                        ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                        : "bg-white/70 text-zinc-700 dark:bg-white/8 dark:text-zinc-200"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a className="rounded-lg bg-zinc-950 px-4 py-3 text-sm font-medium text-white" href={profile.github}>
                GitHub
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t border-zinc-200/80 px-5 py-10 text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {profile.englishName}. Built with React, TypeScript and Tailwind CSS.</p>
          <div className="flex gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-cyan-500">
              GitHub
            </a>
            <a href={`mailto:${profile.emails[0]}`} className="hover:text-cyan-500">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

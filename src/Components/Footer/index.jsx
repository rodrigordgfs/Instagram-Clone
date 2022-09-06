import React from "react";

export default function Footer() {
  return (
    <footer className="mt-4 flex flex-col">
      <ul className="flex flex-row flex-wrap gap-x-2 text-xs text-zinc-400">
        <li>
          <a href="/">Sobre</a>
        </li>
        <li>
          <a href="/">Ajuda</a>
        </li>
        <li>
          <a href="/">API</a>
        </li>
        <li>
          <a href="/">Carreiras</a>
        </li>
        <li>
          <a href="/">Privacidade</a>
        </li>
        <li>
          <a href="/">Termos</a>
        </li>
        <li>
          <a href="/">Termos</a>
        </li>
        <li>
          <a href="/">Localizações</a>
        </li>
        <li>
          <a href="/">Idioma</a>
        </li>
      </ul>
      <p className="font-open text-xs text-zinc-400 mt-4">© 2022 INSTAGRAM FROM META</p>
    </footer>
  );
}

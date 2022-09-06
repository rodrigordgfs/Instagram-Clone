import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white flex flex-row border-b border-zinc-200 sticky top-0 z-9999 shadow-sm">
      <div className="my-0 mx-auto max-w-5xl w-full flex flex-row justify-between items-center px-5 py-3">
        <Link to="/">
          <img
            src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/logo.svg"
            alt="Logo do Instagram"
          />
        </Link>
        <div className="hidden lg:block">
          <div className="w-64 h-9 px-4 flex flex-row items-center gap-3 bg-zinc-200 rounded-lg">
            <img
              src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/search.svg"
              alt="Search"
            />
            <input
              type="text"
              className="bg-transparent outline-none font-open"
              placeholder="Pesquisar"
            />
          </div>
        </div>
        <nav>
          <ul className="flex flex-row gap-5">
            <li className="hidden lg:block">
              <img
                className="cursor-pointer"
                src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/home.svg"
                alt="Icone Home"
              />
            </li>
            <li>
              <img
                className="cursor-pointer"
                src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/new.svg"
                alt="New Home"
              />
            </li>
            <li className="hidden lg:block">
              <img
                className="cursor-pointer"
                src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/find.svg"
                alt="Find Home"
              />
            </li>
            <li>
              <img
                className="cursor-pointer"
                src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/like.svg"
                alt="Like Home"
              />
            </li>
            <li>
              <img
                className="cursor-pointer"
                src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/chat.svg"
                alt="Icone Chat"
              />
            </li>
            <li className="hidden lg:block">
              <img
                className="rounded-full w-6 h-6 outline outline-offset-2 outline-1 outline-zinc-200 cursor-pointer"
                src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/user.jpg"
                alt="Imagem do Usuário"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

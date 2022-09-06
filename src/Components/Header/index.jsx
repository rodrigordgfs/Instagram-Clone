import { SearchIcon } from "@heroicons/react/outline";
import ChatIcon from "../../assets/icons/chat.svg";
import FindIcon from "../../assets/icons/find.svg";
import HomeIcon from "../../assets/icons/home.svg";
import LikeIcon from "../../assets/icons/like.svg";
import Logo from "../../assets/icons/logo.svg";
import NewIcon from "../../assets/icons/new.svg";

export default function Header() {
  return (
    <header className="bg-white flex flex-row border-b border-zinc-200 sticky top-0 z-9999 shadow-sm">
      <div className="my-0 mx-auto max-w-5xl w-full flex flex-row justify-between items-center px-5 py-3">
        <img src={Logo} alt="Logo do Instagram" />
        <div>
          <div className="w-64 h-9 px-4 flex flex-row items-center gap-3 bg-zinc-200 rounded-lg">
            <SearchIcon className="w-4 h-4 text-zinc-500" />
            <input
              type="text"
              className="bg-transparent outline-none font-open"
              placeholder="Pesquisar"
            />
          </div>
        </div>
        <nav>
          <ul className="flex flex-row gap-5">
            <li>
              <img className="cursor-pointer" src={HomeIcon} alt="Icone Home" />
            </li>
            <li>
              <img className="cursor-pointer" src={ChatIcon} alt="Icone Chat" />
            </li>
            <li>
              <img className="cursor-pointer" src={NewIcon} alt="New Home" />
            </li>
            <li>
              <img className="cursor-pointer" src={FindIcon} alt="Find Home" />
            </li>
            <li>
              <img className="cursor-pointer" src={LikeIcon} alt="Like Home" />
            </li>
            <li>
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

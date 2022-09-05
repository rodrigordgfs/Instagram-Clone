import { SearchIcon } from "@heroicons/react/outline";
import ChatIcon from "../../assets/icons/chat.svg";
import FindIcon from "../../assets/icons/find.svg";
import HomeIcon from "../../assets/icons/home.svg";
import LikeIcon from "../../assets/icons/like.svg";
import Logo from "../../assets/icons/logo.svg";
import NewIcon from "../../assets/icons/new.svg";
import User from "../../assets/images/user.jpg";

export default function Header() {
  return (
    <div className="bg-white flex flex-row border-b-2 border-zinc-200">
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
        <div>
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
                src={User}
                alt="Imagem do Usuário"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

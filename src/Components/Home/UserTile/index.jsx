import React, { useContext } from "react";
import { UserContext } from "../../../Contexts/User";

export default function UserTile() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-row gap-5 items-center justify-between mt-5">
      <img
        className="outline outline-offset-2 outline-2 outline-zinc-200 w-14 h-14 rounded-full"
        src={user.image}
        alt="Imagem do Usuário"
      />
      <div className="flex flex-col flex-1">
        <p className="font-semibold text-sm">{user.username}</p>
        <p className="text-sm font-open text-zinc-500">{user.name}</p>
      </div>
      <button className="text-xs font-bold text-blue-500">Mudar</button>
    </div>
  );
}

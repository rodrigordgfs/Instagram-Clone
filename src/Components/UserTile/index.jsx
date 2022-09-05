import React from "react";

export default function UserTile() {
  return (
    <div className="flex flex-row gap-5 items-center justify-between mt-5">
      <img
        className="outline outline-offset-2 outline-2 outline-zinc-200 w-14 h-14 rounded-full"
        src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/user.jpg"
        alt="Imagem do Usuário"
      />
      <div className="flex flex-col flex-1">
        <p className="font-semibold text-sm">mr_shinodaa</p>
        <p className="text-sm font-open text-zinc-500">Rodrigo Shinoda</p>
      </div>
      <p className="text-xs text-blue-500 font-bold cursor-pointer">Mudar</p>
    </div>
  );
}

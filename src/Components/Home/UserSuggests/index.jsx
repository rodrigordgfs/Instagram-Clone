import React, { useContext } from "react";
import { SuggestUsersContext } from "../../../Contexts/SuggestUsers";
import SuggestFollowTile from "../SuggestFollowTile";

export default function UserSuggests() {
  const { suggests } = useContext(SuggestUsersContext);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between mt-4 mb-5">
        <p className="text-sm font-bold text-zinc-400">Sugestões para você</p>
        <p className="text-xs font-bold">Ver tudo</p>
      </div>
      {suggests.map((user) => (
        <SuggestFollowTile
          key={user.id}
          image={user.image}
          username={user.username}
          description={user.description}
        />
      ))}
    </div>
  );
}

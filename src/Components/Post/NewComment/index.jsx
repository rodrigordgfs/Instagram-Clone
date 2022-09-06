import Emote from "../../../assets/icons/emote.svg";

export default function NewComment() {
  return (
    <div className="border-t border-zinc-200 flex flex-row items-center justify-center gap-3 px-3 py-4">
      <img className="w-6 h-6" src={Emote} alt="Icone do Emote" />
      <input
        type="text"
        className="bg-transparent outline-none font-open flex-1"
        placeholder="Adicione um comentário ..."
      />
      <button className=" text-blue-500 font-semibold">Publicar</button>
    </div>
  );
}

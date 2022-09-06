import React from "react";

export default function Comments({ data }) {
  return (
    <div>
      {data.length > 2 && (
        <a href="_" className="font-open text-zinc-500 text-sm px-3">
          Ver todos os {data.length} comentários
        </a>
      )}
      <div className="py-2 px-3 truncate">
        {data.map((item, index) => {
          return (
            index <= 1 && (
              <p className="truncate">
                <span className="font-bold">{item.username}</span>{" "}
                {item.comment}
              </p>
            )
          );
        })}
      </div>
    </div>
  );
}

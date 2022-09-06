import React from "react";

export default function Description({ data }) {
  return (
    <>
      {data.description && (
        <p className="py-4 px-3">
          <span className="font-bold mr-2">{data.username}</span>{" "}
          {data.description}
        </p>
      )}
    </>
  );
}

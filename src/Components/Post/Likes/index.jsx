import React from "react";

export default function Likes({ data }) {
  return (
    <div className="flex flex-row items-center px-3 gap-2">
      {data.length >= 3 && (
        <div className="flex flex-row">
          {data.map((item, index) => {
            return (
              index <= 2 && (
                <img
                  key={index}
                  className={`w-6 h-6 rounded-full border-2 border-white ${
                    index >= 1 && "-ml-2"
                  }`}
                  src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/2.jpg"
                  alt=""
                />
              )
            );
          })}
        </div>
      )}
      {data.length > 0 && (
        <p className="text-sm">
          Curtido por <span className="font-bold">{data[0].username}</span>
          {data.length === 2 && (
            <>
              {" "}
              e <span className="font-bold">{data[1].username}</span>
            </>
          )}
          {data.length > 2 && (
            <>
              {" "}
              e <span className="font-bold">outras pessoas</span>
            </>
          )}
          .
        </p>
      )}
    </div>
  );
}

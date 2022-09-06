export default function UserInfo({ data }) {
  return (
    <div className="flex flex-row items-center justify-between py-4 px-3 gap-4">
      <img
        className="w-8 h-8 rounded-full cursor-pointer"
        src={data.image}
        alt="Imagem do Usuário"
      />
      <div className="flex-1 flex flex-col">
        <div className="flex flex-row gap-2 items-center">
          <p className="font-semibold text-sm cursor-pointer">
            {data.username}
          </p>
          {data.verified && (
            <img
              className="text-blue-500"
              src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/verified.svg"
              alt="Icon de verificado"
            />
          )}
        </div>
        {data.location && (
          <p className="font-open text-xs cursor-pointer">{data.location}</p>
        )}
      </div>
      <img
        className="cursor-pointer"
        src="https://instagram-clone-shinodalabs.s3.sa-east-1.amazonaws.com/dots.svg"
        alt="Dots"
      />
    </div>
  );
}

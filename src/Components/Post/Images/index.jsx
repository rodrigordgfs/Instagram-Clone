import React from 'react'

export default function Images({ data }) {
  return (
    <img
        className="w-full border-y border-zinc-200"
        src={data[0]}
        alt="Imagem do Post"
      />
  )
}

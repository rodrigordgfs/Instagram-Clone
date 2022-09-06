import React from 'react'

export default function SuggestFollowTile({ image, username, description }) {
  return (
    <div className='flex flex-row items-center justify-between py-2'>
        <img className='w-8 h-8 rounded-full' src={image} alt="Imagem do Usuário" />
        <div className='flex flex-col flex-1 truncate px-3'>
            <p className='text-sm font-bold'>{username}</p>
            <p className='text-xs font-open truncate  text-zinc-500'>{description}</p>
        </div>
        <button className='text-xs font-bold text-blue-500'>Seguir</button>
    </div>
  )
}

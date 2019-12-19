import React from 'react'
import { validateName } from '@zecos/validate'
import { Select } from '@zecos/input-basic'

const Example = () => {
  const { FavoriteFlavorOfIceCream, FavoriteFlavorOfIceCreamDisplay } = Select({
    init: 'chocolate',
    name: "favoriteFlavorOfIceCream"
  })

  return (
    <div>
      <FavoriteFlavorOfIceCream
        options={{
          "Rocky Road": "rockyroad",
          "Chocolate": "chocolate",
          "Vanilla": "vanilla",
        }}
      />
      <FavoriteFlavorOfIceCreamDisplay />
    </div>
  )
}

export default Example
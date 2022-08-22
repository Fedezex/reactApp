import React, { useState, useEffect } from 'react'

export default function ItemListLayout({productos}) {
  return (
    <div>{JSON.stringify(productos)}</div>
  )
}

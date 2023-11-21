export const authSelect = (state: RootState) => state.auth 
export const chatSelect = (state: RootState) => state.chat 

import React from 'react'
import { RootState } from './store'

export default function selectors() {
  return (
    <div>selectors</div>
  )
}

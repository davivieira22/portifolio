import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Portifolio} from './Container/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portifolio/>
  </StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ClassHeader from './Header.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <ClassHeader />
  </StrictMode>,
)

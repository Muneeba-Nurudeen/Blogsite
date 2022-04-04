import React from 'react'
import { useNavigate } from 'react-router-dom'
import withLayout from './withLayout'

function Home() {
  const navigate = useNavigate()
  return (
    <div>
    <div className='banner'>
    <h1>Welcome To My Webpage</h1>
    <p>Elon Reeve Musk FRS (/ˈiːlɒn/; born June 28, 1971) is an entrepreneur and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; early-stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI.</p>
    

    <div className='actions-wrap'>
    <button className='btn-outline' onClick={()=>navigate("./about")}>About Me</button>
    <button className='btn-contain' onClick={()=>navigate("./blog")}>Read Blogs</button>
    </div>
    </div>
    
    
    </div>
  )
}

export default withLayout(Home)
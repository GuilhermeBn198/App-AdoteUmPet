import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title';

const Home: NextPage = () => {
  return (
    <div>
      <Title 
        title="" 
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br/>
            pode <strong>adotar</strong> um pet virtualmente
          </span>
                }/>
    </div>
  )
}

export default Home

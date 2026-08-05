import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [   
    {
      img:'https://i.pinimg.com/736x/0c/e4/40/0ce4408d0d551bb512d26cdd62886bda.jpg',
      intro:'',
      tag:'UnderBanked',
    },    
    {
      img:'https://i.pinimg.com/originals/17/c7/fa/17c7fa48180230a47f64db7f2fbd24eb.jpg',
      intro:'',
      tag:'Underserved',
    },
        {
      img: 'https://inspireinlet.com/wp-content/uploads/2024/07/103-inspireinlet-53.webp',
      intro: '',
      tag: 'Empowered',
    },
    {
      img:'https://thumbs.dreamstime.com/b/professional-business-woman-leader-company-worker-sales-hr-manager-working-modern-office-young-smiling-happy-female-349649976.jpg?w=576',
      intro:'',
      tag:'Satisfied', 
    },
    {
      img: 'https://img.freepik.com/premium-photo/positive-long-haired-woman-working-with-documents-laptop_926199-2705637.jpg',
      intro: '',
      tag: 'Empowered',
    }

  ]
  return (
    <div >
      <Section1 users={users}/>
      {/* <Section2/> */}
    </div>
  )
}

export default App

import styled from 'styled-components'
function Rolldice({ rollDice,currentDice}) {
     
      return (
    <DiceContainer>
    <div className='dice' 
    onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt='dice 1'/>
    </div>
    <p>Click on dice to roll </p>
    </DiceContainer>
  )
}

export default Rolldice

const DiceContainer = styled.div`
display: flex;
align-items: center;
margin-top: 48px;
flex-direction: column;
.dice{
    cursor:pointer;
    
}

p{
    font-size: 24px;
}

`;
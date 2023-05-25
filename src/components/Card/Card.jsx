import React from 'react'
import { Button } from 'components/Button'
import { styled } from 'styled-components'
import ethIcon from "assets/Vector (32).png"
import greenArrow from "assets/green-arrow.svg";
import redArrow from "assets/red-arrow.svg";
const StyleCard = styled.div`
 padding: 24px;
    width: 164px;
    height: 167px;
    border-radius: 20px;
    background: #FFFF;
    color: #747475;
    .title{
        color: #747475;
        margin-bottom: 12px;
        font-family: "DM Sans";
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;

    }
    .amount{
        font-family: "DM Sans";
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        font-family: DM Sans;
        font-size: 24px;
        font-weight: 700;
        line-height: 31px;
        letter-spacing: 0em;
        text-align: left;
        color: #747475;

    }
    .amount-wrapper{
        margin-bottom: 12px;
    }
    .eth{
        font-size: 10px;
    }
`
export const Card = ({title, amount , percent,content,children}) => {
  return (
    <StyleCard>
        <div className='title'>{title}</div>
        {amount ? <div className='eth'><img src={ethIcon} alt="" /><span className='amount'>{amount}</span> ETH</div> :
        <div>
          {content}
            </div>}
       
          <Button mt={50} bgColor="#7c5c5c5"  boderColor='#E9E9E9'> { percent && <img src={ percent< 0 ? redArrow : greenArrow} alt="arr"></img> }{children}%</Button>
    </StyleCard>
  )
}

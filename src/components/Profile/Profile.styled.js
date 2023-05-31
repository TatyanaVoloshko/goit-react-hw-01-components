import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 15px;
    width: 370px;
    box-shadow: rgba(198, 204, 204, 0.93) 0px 0px 10px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;`

  export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  border-bottom: #7e6f7498 solid 2px;`

  export const Photo = styled.img`
  width: 300px;
  box-shadow: 0 0 3px 0px #0000004d;
  border-radius: 50%;
  background-color: #e7eeeeed;
  padding: 20px 10px 0px 10px;
  margin-bottom: 15px;`

  export const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: #524a4d;`

  export const Tag = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #524a4d;
  margin-bottom: 15px;`

  export const Location = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #524a4d;
  margin-bottom: 15px;`

  export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 0;
  width: inherit;
  background-color: #7e6f7449;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;`

  export const StatsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  min-width: 80px;
  padding: 7px 0;`

  export const Label = styled.span`
  margin-right: 3px;
  font-weight: 700;
  font-size: 20px;
  color: #524a4d8b;
  margin-bottom: 5px;`

  export const Quantity = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: #524a4d;`
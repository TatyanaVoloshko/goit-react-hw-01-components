import styled from 'styled-components'

export const StatList = styled.ul`
display: flex;
  flex-direction: column;
  width: inherit;
  padding: 0;`

  export const Item = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px #c6cccced;
  padding: 20px;`

  export const Status = styled.span`
  background-color: ${({isHide}) => (isHide ? 'green' : 'red')};
    width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;`

  export const Photo = styled.img`
    width: 100px;
  margin-right: 10px;`

  export const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: #524a4d;`
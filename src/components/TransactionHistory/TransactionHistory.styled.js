import styled from 'styled-components'

export const Table = styled.table`
 padding-top: 30px;
 padding-bottom: 30px;
  box-shadow: 0 0 10px #c6cccced;
  width: 370px;
  border-spacing: 0;
  margin-left: auto;
  margin-right: auto;`

  export const HeaderTable = styled.thead`
  margin-bottom: 15px;
  padding-top: 10px;
  padding-bottom: 10px;`

export const BodyTable = styled.thead`
margin-bottom: 5px;
padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;`

  export const HeaderString = styled.th`
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 5px;
  color: #524a4d;`

  export const TableColumn = styled.tr`
  justify-content: space-around;
  border-bottom: solid 1px #c6cccce6;`

  export const TableString = styled.td`
  padding: 10px;
  width: inherit;
  font-weight: 700;
  font-size: 15px;
  color: #524a4d;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;`
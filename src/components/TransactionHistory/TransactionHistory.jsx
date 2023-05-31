import 
{Table, 
  HeaderTable, 
  HeaderString, 
  TableColumn,
  TableString,
  BodyTable} from './TransactionHistory.styled'
  import propTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return (
        <Table>
  <HeaderTable>
    <tr>
      <HeaderString>Type</HeaderString>
      <HeaderString>Amount</HeaderString>
      <HeaderString>Currency</HeaderString>
    </tr>
  </HeaderTable>

  <BodyTable>
    {items.map(({id, type, amount, currency}) =>{
        return (
            <TableColumn key = {id}>
            <TableString>{type}</TableString>
            <TableString>{amount}</TableString>
            <TableString>{currency}</TableString>
          </TableColumn>  
        )
    } )}
   
   </BodyTable>
</Table>
    )
}

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired
  }))
  
};
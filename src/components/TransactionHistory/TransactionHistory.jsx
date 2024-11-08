import s from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
    
  return (
    <table className={s.tableHistory}>
  <thead className={s.tableHead}>
    <tr>
      <th className={s.point}>Type</th>
      <th className={s.point}>Amount</th>
      <th className={s.point}>Currency</th>
    </tr>
  </thead>
  <tbody >
 {items.map(a=>{ return (<tr className={s.tableBody} key={a.id}>
      <td className={s.point}>{a.type}</td>
      <td className={s.point}>{a.amount}</td>
      <td className={s.point}>{a.currency}</td>
    </tr> )})}
  </tbody>
</table>
  )
}

export default TransactionHistory

import { useDispatch, useSelector } from 'react-redux'
import { setEmail } from './store/email/emailSlice'

export const email = () => {

    const onChange = (e) => {
        dispatch(setEmail(e.target.value))  
      }
      
      const dispatch = useDispatch()
      const { value } = useSelector(state => state.email) // useSelector es un hook de react-redux que nos permite acceder al estado de la store

  return (
    <div>
    <input type="text" value={value} onChange={onChange} />
      
    </div>
  )
}

export default email

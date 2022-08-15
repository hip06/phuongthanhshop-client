import React from 'react'
import { Button } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'
import { useNavigate } from 'react-router-dom'


const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoggedIn } = useSelector(state => state.auth)
    return (
        <div className='w-full flex items-center gap-5 py-5 justify-center' >
            Header here
            {!isLoggedIn && <>
                <Button
                    text={'Đăng nhập'}
                    bgColor='bg-blue-700'
                    textColor='text-white'
                    onClick={() => navigate('/login', { state: { flag: false } })}
                />
                <Button
                    text={'Đăng ký'}
                    bgColor='bg-blue-700'
                    textColor='text-white'
                    onClick={() => navigate('/login', { state: { flag: true } })}
                /></>}
            {isLoggedIn && <Button
                text={'Đăng xuất'}
                bgColor='bg-red-700'
                textColor='text-white'
                onClick={() => dispatch(actions.logout())}
            />}
        </div>
    )
}

export default Header
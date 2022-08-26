import React, { useState } from 'react'
import InputCustomWidth from '../../components/InputCtWidth'

const CreateProduct = () => {
    const [test, setTest] = useState('this is test value')

    return (
        <>
            <InputCustomWidth
                value={test}
                lable='test field'
            />
        </>
    )
}

export default CreateProduct
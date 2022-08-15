import React, { memo } from 'react'

const InputField = ({ label, value, setValue, type, typeInput, setInvalidFields, invalidFields }) => {

    return (
        <div className='w-full my-3'>
            <label htmlFor="field" className='text-xs' >{label}</label>
            <input
                type={typeInput}
                id="field"
                value={value}
                onChange={e => setValue(prev => ({
                    ...prev, [type]: e.target.value
                }))}
                className='outline-none p-2 bg-gray-100 rounded-md w-full'
                onFocus={() => setInvalidFields([])}
            />
            {invalidFields.length > 0 && invalidFields?.some(i => i.field === type) && <small className='text-red-500 italic' >
                {invalidFields?.find(i => i.field === type).msg}
            </small>}
        </div>
    )
}

export default memo(InputField)
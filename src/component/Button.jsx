import React from 'react'
import '../component/Button.css'
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

const Button = ({children,type}) => {
  const { login, register } = useKindeAuth();

  return (
    <button className='px-4 py-3 rounded border-0 btn-primary ' onClick={register} >{children}</button>
  )
}

export default Button
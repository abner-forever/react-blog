import React, { useEffect, useState } from 'react'

const Login = () => {
    return(
        <div>
            <input type="text" name='userName'/>
            <input type="password" name='passWord'/>
            <button>
                登录
            </button>
        </div>
    )
}
export default Login
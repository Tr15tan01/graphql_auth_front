import { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useForm } from '../utils/formHook'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'graphql-tag'
import { useNavigate } from 'react-router-dom'

const LOGIN_USER = gql`
    mutation Mutation(
        $loginInput: LoginInput
    ) {
        loginUser(
            loginInput: $loginInput
        ) {
            email
            username
            token
        }
    }
`

export function Login() {
    const context = useContext(AuthContext)
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    function loginUserCallback() {
        console.log('callback hit')
        loginUser()
    }

    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        email: '',
        password: ''
    })

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(proxy, { data: { loginUser: userData } }) {
            context.login(userData)
            navigate('/')
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors)
        },
        variables: { loginInput: values }
    })

    return (
        <div className="ui container mt-3">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" onChange={onChange} placeholder="Email" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="text" name="password" onChange={onChange} placeholder="Password" />
                </div>
                <button className="fluid teal large ui button" type="submit">Submit</button>
            </form>
            {errors && errors.map(function (error) {
                return <div class="ui red message">{error.message}</div>
            })}
        </div>
    )
}
import { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useForm } from '../utils/formHook'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'graphql-tag'
import { useNavigate } from 'react-router-dom'

const REGISTER_USER = gql`
    mutation Mutation(
        $registerInput: RegisterInput
    ) {
        registerUser(
            registerInput: $registerInput
        ) {
            email
            username
            token
        }
    }
`

export function Register() {
    const context = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setErrors] = useState([])

    function registerUserCallback() {
        console.log('callback hit')
    }

    const { onChange, onSubmit, values } = useForm(registerUserCallback, {
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    })

    const [registerUser, { loading }] = useMutation(REGISTER_USER, {
        update(proxy, { data: { registerUser: userData } }) {
            context.login(userData)
            navigate('/')
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors)
        },
        variables: { registerInput: values }
    })

    return (
        <div className="ui container mt-3">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input type="text" name="username" onChange={onChange} placeholder="First Name" />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" onChange={onChange} placeholder="Last Name" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="text" name="password" onChange={onChange} placeholder="Last Name" />
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <input type="text" name="confirmpassword" onChange={onChange} placeholder="Last Name" />
                </div>
                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox" tabIndex="0" className="hidden" />
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <button className="fluid teal large ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { Link } from 'react-router-dom'

type FormData = {
    firstName: string
    email: string
    message: string
    checkBx: boolean
}

const schema = yup.object().shape({
    firstName: yup.string().required('Pole Imię nie może być puste.'),
    email: yup
        .string()
        .email('Podany adres e-mail nie jest poprawny.')
        .required(
            'Pole adres e-mail nie może być puste. Proszę podać swój adres e-mail.'
        ),
    message: yup.string().required('Pole wiadomość nie może być puste. '),
    checkBx: yup
        .boolean()
        .oneOf(
            [true],
            'Musisz wyrazić zgodę na politykę prywatności, aby kontynuować.'
        )
        .required('Pole zgody na politykę prywatności jest wymagane.'),
})

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    })
    const [isSuccess, setIsSuccess] = useState<boolean>(true)

    const sendMessage: SubmitHandler<FormData> = async (data) => {
        try {
            axios.post(import.meta.env.VITE_MAILAPI, { ...data })
            setIsSuccess(true)
            reset()
        } catch (error) {
            console.error('Error sending message:', error)
            setIsSuccess(false)
        }
    }

    return (
        <div className="w-full pt-5">
            <form
                className="flex flex-col items-center gap-5 lg:items-start"
                onSubmit={handleSubmit(sendMessage)}
            >
                <label htmlFor="firstName" className="labels">
                    Imię
                    <input
                        type="text"
                        id="firstName"
                        placeholder="Imię"
                        {...register('firstName')}
                    />
                </label>
                {errors.firstName && (
                    <span className="text-sm text-red-800">
                        {errors.firstName.message}
                    </span>
                )}
                <label htmlFor="email" className="labels">
                    Email
                    <input
                        type="email"
                        id="email"
                        placeholder="example@email.com"
                        {...register('email')}
                    />
                </label>
                {errors.email && (
                    <span className="text-sm text-red-800">
                        {errors.email.message}
                    </span>
                )}
                <label htmlFor="message" className="labelTextArea">
                    Wiadomość
                    <textarea
                        id="message"
                        placeholder="Napisz swoją wiadomość"
                        {...register('message')}
                    />
                </label>
                {errors.message && (
                    <span className="text-sm text-red-800">
                        {errors.message.message}
                    </span>
                )}
                <label
                    htmlFor="checkBx"
                    className="flex flex-col items-center lg:flex-row"
                >
                    <input
                        type="checkbox"
                        id="checkBx"
                        {...register('checkBx')}
                    />
                    &nbsp; Wyrażam zgodę na przetwarzanie danych osobowych w
                    celu odpowiedzi na zapytanie &nbsp;
                    <Link to="/polityka-prywatności" className="text-csk-600">
                        (Polityka prywatności).
                    </Link>
                </label>
                {errors.checkBx && (
                    <span className="text-sm text-red-800">
                        {errors.checkBx.message}
                    </span>
                )}
                <button className="h-11 w-60 rounded-xl bg-csk-700 text-csk-50">
                    Wyślij wiadomość
                </button>
            </form>
            {isSuccess && (
                <div className="mt-5 text-green-700">
                    Wiadomość została wysłana pomyślnie.
                </div>
            )}
        </div>
    )
}

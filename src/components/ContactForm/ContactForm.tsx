import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'

type FormData = {
    firstName: string
    email: string
    message: string
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

    const sendMessage: SubmitHandler<FormData> = (data) => {
        axios.post(import.meta.env.VITE_MAILAPI, { ...data })
        reset()
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
                </label>{' '}
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
                <button className="h-11 w-60 rounded-xl bg-csk-700 text-csk-50">
                    Wyślij wiadomość
                </button>
            </form>
        </div>
    )
}

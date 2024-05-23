/* import { useForm } from 'react-hook-form' */

export default function ContactForm() {
    /*     const { register, handleSubmit, reset } = useForm() */
    return (
        <div className=" w-full">
            <form className="flex flex-col gap-5">
                <label htmlFor="firstName" className="labels">
                    Imię i Nazwisko
                    <input
                        type="text"
                        required
                        id="firstName"
                        placeholder="Jan Kowalski"
                    />
                </label>
                <label htmlFor="email" className="labels">
                    Email
                    <input
                        type="email"
                        required
                        id="email"
                        placeholder="example@email.com"
                    />
                </label>
                <label htmlFor="email" className="labelTextArea">
                    Wiadomość
                    <textarea placeholder="Napisz swoją wiadomość" />
                </label>
                <button className="h-11 w-60 rounded-xl bg-csk-700 text-csk-50">
                    Wyślij wiadomość
                </button>
            </form>
        </div>
    )
}

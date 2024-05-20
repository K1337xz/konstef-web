/* import { useForm } from 'react-hook-form' */

export default function ContactForm() {
    /*     const { register, handleSubmit, reset } = useForm() */
    return (
        <div>
            <form className="flex flex-col gap-5">
                <label htmlFor="firstName" className="labels">
                    Imię i Nazwisko
                    <input type="text" required id="firstName" />
                </label>
                <label htmlFor="email" className="labels">
                    Email
                    <input type="email" required id="email" />
                </label>
                <label htmlFor="email" className="labelTextArea">
                    Wiadomość
                    <textarea />
                </label>
                <button className=" h-11 w-60 rounded-xl bg-csk-700 text-csk-50">
                    Wyślij wiadomość
                </button>
            </form>
        </div>
    )
}

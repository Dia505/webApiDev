import { useForm } from "react-hook-form"

function LoginPage() {
    const {register, handleSubmit} = useForm();

    const submit = (data) => {
        console.log(data)
    }

    return <>
    <form onSubmit={handleSubmit(data)}>
        <div>
            <label>name</label>: <input type="text" {...register("name")}/>
        </div>
        <div>
            <label>age</label>: <input type="text" {...register("age")}/>
        </div>
        <div>
            <input type="submit"/>
        </div>
    </form>
    </>
}

export default LoginPage
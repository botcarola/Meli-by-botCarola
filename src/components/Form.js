

const Form = ({funcionOnSubmit, funcionValorInput}) => {

    return (
        <form onSubmit={funcionOnSubmit}>
            <label>
                <input type="text" onChange={funcionValorInput}></input>
            </label>
            <label>
                <input type="submit"></input>
            </label>
        </form>
    )
};

export default Form;
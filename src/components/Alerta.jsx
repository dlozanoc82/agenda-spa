
const Alerta = ({alerta}) => {
    return (
        <div className={`${alerta.error ? 'from-red-400 to-red-500' : 'from-teal-400 to-teal-600'} bg-gradient-to-b text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}>
            <p>{alerta.msg}</p>
        </div>
    )
}

export default Alerta
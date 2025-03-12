
export const AgreementModal = ({setContinuePop, setAgreementStatus}) => {
    const handleAccept = () => {
        setContinuePop(false);
        setAgreementStatus(true);
    }
  return (
    <div className="h-screen w-screen bg-base-100/80 bg-opacity-50 fixed top-0 left-0 z-50 flex justify-center items-center">
        <div className="bg-base-300 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-secondary-content/50"><u>Terms and Conditions</u></h2>
            <p className="text-base-content/50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien
                fermentum
                aliquet. Donec sit amet turpis nec orci fermentum ultricies. Nullam et nunc sit amet nulla
            </p>
            <div className="flex justify-end mt-4">
                <button className="bg-blue-500/60 text-base-content px-4 py-2 rounded-lg" onClick={handleAccept}>Accept</button>
            </div>
        </div>
    </div>
  )
}

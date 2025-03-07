
export const AgreementModal = ({setContinuePop, setAgreementStatus}) => {
    const handleAccept = () => {
        setContinuePop(false);
        setAgreementStatus(true);
    }
  return (
    <div className="h-screen w-screen bg-black bg-opacity-50 fixed top-0 left-0 z-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien
                fermentum
                aliquet. Donec sit amet turpis nec orci fermentum ultricies. Nullam et nunc sit amet nulla
            </p>
            <div className="flex justify-end mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleAccept}>Accept</button>
            </div>
        </div>
    </div>
  )
}

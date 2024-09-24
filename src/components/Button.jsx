export default function Button({ buttonText, onClick }) {
    return (
        <button 
            className="text-sm sm:text-lg px-2 py-1 sm:px-4 sm:py-2 bg-gray-100 border border-gray-400 rounded-sm hover:bg-gray-200" 
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
}

function Modal({ 
    children, 
    isOpen, 
    onClose,
    title = '',
    size = 'md'
}) {
    if (!isOpen) return null;

    const sizeClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        full: 'w-full'
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className={`bg-white rounded-lg shadow-xl p-6 ${sizeClasses[size]} w-full max-w-md`}>
                {title && (
                    <div className="mb-4">
                        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                    </div>
                )}
                <div className="space-y-4">
                    {children}
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                    <button 
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
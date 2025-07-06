import { useNavigate } from 'react-router-dom'
import { HiHome, HiArrowLeft, HiExclamation } from 'react-icons/hi'

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <HiExclamation className="w-12 h-12 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">4</span>
                        </div>
                        <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">4</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h1 className="text-6xl font-bold text-gray-900 mb-4">
                        404
                    </h1>
                    
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        Page Not Found
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed">
                        Oops! The page you&apos;re looking for doesn&apos;t exist. 
                        It might have been moved, deleted, or you entered the wrong URL.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <button
                            onClick={() => navigate('/')}
                            className="modern-button hover-lift group w-full sm:w-auto"
                        >
                            <HiHome className="w-4 h-4 mr-2" />
                            Go Home
                        </button>
                        
                        <button
                            onClick={() => navigate(-1)}
                            className="modern-button-secondary hover-lift w-full sm:w-auto"
                        >
                            <HiArrowLeft className="w-4 h-4 mr-2" />
                            Go Back
                        </button>
                    </div>

                    <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h3 className="text-sm font-semibold text-blue-800 mb-2">
                            Need Help?
                        </h3>
                        <p className="text-sm text-blue-700">
                            If you believe this is an error, please contact support or try refreshing the page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
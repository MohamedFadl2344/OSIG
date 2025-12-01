const GenerationInfo = () => {
    return (
        <div className="text-center mb-8">
            <p className="text-sm text-gray-500">
                Estimated time: <span className="font-semibold text-gray-700">~15 seconds</span>
            </p>
            <p className="text-xs text-gray-400 mt-2">
                Your images are never stored - generated in real time only
            </p>
        </div>
    );
};

export default GenerationInfo;

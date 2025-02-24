function ErrorMessage({ children }) {
  return (
    <div className="flex items-center justify-center h-[75vh]">
      <p className="max-w-md px-3 py-2 text-center text-red-600 border border-red-400 rounded-md bg-red-50">
        {children}
      </p>
    </div>
  );
}

export default ErrorMessage;

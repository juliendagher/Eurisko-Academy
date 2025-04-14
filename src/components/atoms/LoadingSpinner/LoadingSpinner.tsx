const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-primary"></div>
    </div>
  );
};

export { LoadingSpinner };

const useGetClientRect = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export default useGetClientRect;

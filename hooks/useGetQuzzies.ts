const useGetQuzzies = async (category: string, arrOfDifficulty: string[]) => {
  const req = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}&difficulty=easy`
  );
  const res = await req.json();
  return res;
};

export default useGetQuzzies;

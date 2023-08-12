const GetQuzzies = async (
  category: string = "",
  difficulty: string = "easy",
  limit: string = "20"
) => {
  const req = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&category=${category}&difficulty=${difficulty}&limit=${limit}`
  );
  const res = await req.json();
  return res;
};

export default GetQuzzies;

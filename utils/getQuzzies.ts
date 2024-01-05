const GetQuzzies = async ({
  category = "",
  difficulty = "easy",
  limit = 20,
}: {
  category: string;
  difficulty: string;
  limit?: number;
}) => {
  const req = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${
      process.env.API_KEY
    }&category=${
      category === "random" ? "" : category
    }&difficulty=${difficulty}&limit=${limit}`
  );
  const res = await req.json();
  return res;
};

export default GetQuzzies;

const GetQuzzies = async ({
  category = "",
  difficulty = "easy",
  signal,
  limit = 20,
}: {
  category: string;
  difficulty: string;
  limit?: number;
  signal?: any;
}) => {
  const req = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${
      process.env.NEXT_PUBLIC_API_KEY
    }&category=${
      category === "random" ? "" : category
    }&difficulty=${difficulty}&limit=${limit}`,
    { signal }
  );
  const res = await req.json();
  return res;
};

export default GetQuzzies;

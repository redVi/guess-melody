export default class QuestionService {
  get = async (url) => {
    const res = await fetch(`${url}`);

    if (!res.ok) throw new Error(`Server error ${res.status}`);

    return res.json();
  }
}

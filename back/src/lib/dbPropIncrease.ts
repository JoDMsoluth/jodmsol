import PostCollection from "models/post/PostCollection";
import PostDocument from "models/post/PostDocument";

export default async function dbPropIncrease(
  id: string,
  props: string,
  value: number
) {
  try {
    const newPost: PostDocument | null = await PostCollection.findByIdAndUpdate(
      id,
      {
        $inc: { [props]: value }
      },
      { new: true }
    ).exec(); // new:true => 업데이트 된 데이터 반환

    if (!newPost) {
      console.log("not found");
    }
    return newPost && newPost.likes;
  } catch (e) {
    console.error(e);
    return;
  }
}

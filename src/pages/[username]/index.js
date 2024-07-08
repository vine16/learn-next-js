import { useRouter } from "next/router";
export default function Main() {
  const router = useRouter();
  console.log(router);
  return <div>Main page of {router.query.username}</div>;
}

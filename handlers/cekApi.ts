import client from "../database/database.ts";

export default async function cekApi(api_key: any) {
  const cek = await client.query(
    "select api_key , created_at from api_key where ?? =?",
    ["api_key", api_key],
  );
  const final = cek[0];
  console.log(final);
  return final;
}

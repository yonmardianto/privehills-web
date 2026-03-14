import fs from "fs";
import path from "path";

function countFiles(folder: string) {
  const folderPath = path.join(process.cwd(), "public", "assets", "img", "unit", folder);
  if (!fs.existsSync(folderPath)) return 0;
  return fs.readdirSync(folderPath).length;
}

export async function GET() {
  return new Response(
    JSON.stringify({
      agave: countFiles("agave"),
      acacia: countFiles("acacia"),
      stevia: countFiles("stevia"),
      verbena: countFiles("verbena"),
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}

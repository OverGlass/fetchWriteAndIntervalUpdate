import fetchHttpFile from "https://raw.githubusercontent.com/OverGlass/fetchHttpFile/v0.0.1/fetchHttpFile.ts";

async function fetchAndWriteFile(url: string, outputPath: string) {
  console.log("Fetching file...");
  const file = await fetchHttpFile(url);
  console.log("Writing file...");
  await Deno.writeFile(outputPath, file);
  console.log("Done");
}
async function callFirstTimeAndEachInterval(fn: Function, ms: number) {
  await fn();
  setInterval(async () => {
    await fn();
  }, ms);
}

export default async function fetchWriteAndIntervalUpdate(
  fileUrl: string,
  path: string,
  interval: number
) {
  await callFirstTimeAndEachInterval(
    async () => await fetchAndWriteFile(fileUrl, path),
    interval
  );
}

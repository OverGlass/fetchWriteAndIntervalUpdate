# fetchWriteAndIntervalUpdate
A function to fetch, write and Interval update in millisecond
```typescript
//main.ts
import fetchWriteAndIntervalUpdate from "https://raw.githubusercontent.com/OverGlass/fetchWriteAndIntervalUpdate/v0.0.1/fetchWriteAndIntervalUpdate.ts"
await fetchWriteAndIntervalUpdate("http://localhost:8000",`${Deno.cwd()}/db.json`, 5000)
```
```sh
deno run --allow-net --allow-write --allow-read main.ts
```

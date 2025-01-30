# Next.js API Route Error: Missing JSON Headers

This repository demonstrates a common error in Next.js API routes where the response does not include the necessary headers to indicate that the response is JSON. This leads to errors when deploying to platforms like Vercel.

## Bug

The `pages/api/hello.js` file contains an API route that returns JSON data. However, it does not include the `Content-Type: application/json` header, causing an error.

## Solution

The `pages/api/hello.js` file is modified to include the `Content-Type: application/json` header in the response.

## How to reproduce

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Access the API route at `http://localhost:3000/api/hello`
5. The response should now correctly include the JSON header.
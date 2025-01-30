```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ name: 'John Doe' });
}
```
By adding `res.setHeader('Content-Type', 'application/json');`, we ensure that the response includes the necessary header, fixing the error.
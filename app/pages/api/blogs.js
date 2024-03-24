export default function handler(req, res) {
    res.status(200).json([
        {
            "Title": "I am title 1",
            "Body": "Hello from post 1"
        },
        {
            "Title": "I am title 2",
            "Body": "Hello from post 2"
        }]
        );
}
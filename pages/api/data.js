export default function handler(req, res) {
    const key = process.env.SAMPLE_API_TOKEN;
    return res.status(200).json([
        {
            "Title": "I am title 1",
            "Body": "Hello from post "+ key
        },
        {
            "Title": "I am title 2",
            "Body": "Hello from post 2"
        }]
        );
}
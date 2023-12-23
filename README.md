## Prerequisites

- Node.js installed on your machine
- Gmail account (or other email service) for sending emails

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/TLHSIEH0610/CE-email.git
    cd CE-email
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your email credentials:

    Open `.env` and replace the placeholder values with your actual Gmail account credentials:

    ```bash
    email_service=Gmail # service provider
    email_host=smtp.gmail.com # service host
    email_port=465 # service port
    email_address="" # email address
    app_password="" # app password (not email password)
    ```

    **Note:** Storing passwords directly in code is not recommended for production applications. Use environment variables or other secure methods instead.

4. Run the server:

    ```bash
    node index.js
    ```

    The server will be running on `http://localhost:4000` by default.

5. Test the endpoint:

    Use a tool like `curl` or Postman to send a POST request to `http://localhost:4000/emails` with the following JSON body:

    ```json
    {
      "to": "hello@ce.com",
      "subject": "Hi",
      "body": "Hello World!"
    }
    ```

    Ensure that you receive a response indicating that the email has been sent.

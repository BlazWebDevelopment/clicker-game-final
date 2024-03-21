import mailchimp from "@mailchimp/mailchimp_transactional";

export async function sendMessageEmail(
  name: string,
  lastName: string,
  email: string,
  message: string
) {
  const mailchimpClient = mailchimp(process.env.MANDRILL_API_KEY);
  await mailchimpClient.messages.send({
    message: {
      html: `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <title>sent Mail</title>
            <style>
              body {
                font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f9f9f9;
                padding: 20px;
                margin: 0;
              }
        
              .container {
                background-color: #fff;
                border-radius: 8px;
                padding: 20px;
                max-width: 500px;
                margin: 0 auto;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
        
              .header {
                text-align: center;
                margin-bottom: 10px;
              }
        
              .header > h1 {
                margin-bottom: 5px;
                color: #22223b;
              }
        
              .content {
                margin-bottom: 20px;
                text-align: center;
              }
        
              .button {
                display: inline-block;
                padding: 15px 30px;
                text-align: center;
                background-color: #5c5f7d;
                color: white;
                text-decoration: none;
                border-radius: 4px;
                font-size: 16px;
                transition: all 0.3s ease;
              }
        
              .button:hover {
                background-color: #c9ada7;
                transform: translateY(-1px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
        
              .disclaimer {
                font-size: 12px;
                color: #666;
                border-top: 1px solid #ddd;
                padding-top: 10px;
                margin-top: 10px;
                text-align: center;
              }
            </style>
          </head>
          <body>
          <div class="container">
          <div class="header">
            <h1>${name + " " + lastName}</h1>
            <h2>Password Reset Requested</h2>
          </div>
          <div class="header"></div>
          <div class="content">
            <p>Message: ${message}</p>
          </div>
        </div>
          </body>
        </html>
        `,
      subject: "Blaz Dezman, portfolio",
      from_email: `${email}`,
      to: [{ email: "dezmanblaz1@gmail.com" }],
    },
  });
}
